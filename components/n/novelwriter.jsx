import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg9kfeu9k.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg9kfeu9k"/>`,
		"fallback": "devicon-plain:novelwriter",
	});
}

export default Component;
