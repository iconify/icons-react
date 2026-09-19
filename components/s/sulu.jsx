import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lffumwwzx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lffumwwzx"/>`,
		"fallback": "devicon:sulu",
	});
}

export default Component;
