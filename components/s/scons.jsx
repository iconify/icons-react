import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9g4-upkk.css';
import '../../css/o/o4kdtcbtb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9g4-upkk"/><path class="o4kdtcbtb"/>`,
		"fallback": "material-icon-theme:scons",
	});
}

export default Component;
