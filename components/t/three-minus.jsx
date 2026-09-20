import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma7frebpg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma7frebpg"/>`,
		"fallback": "pinhead:three-minus",
	});
}

export default Component;
