import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voldqwefv.css';
import '../../css/z/z-xry-ugs.css';
import '../../css/d/d4viujbxu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voldqwefv"/><circle class="z-xry-ugs"/><path class="d4viujbxu"/>`,
		"fallback": "material-icon-theme:test-js",
	});
}

export default Component;
