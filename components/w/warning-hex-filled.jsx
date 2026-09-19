import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fppk0pz3y.css';
import '../../css/z/zay7feb1d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fppk0pz3y"/><path class="zay7feb1d"/>`,
		"fallback": "carbon:warning-hex-filled",
	});
}

export default Component;
