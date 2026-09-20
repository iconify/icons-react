import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atti1kbuc.css';
import '../../css/w/w57s-x_gs.css';
import '../../css/r/rkutulbsh.css';
import '../../css/q/qzguk0yob.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atti1kbuc"/><path clip-rule="evenodd" class="w57s-x_gs"/><path class="rkutulbsh"/><path class="qzguk0yob"/>`,
		"fallback": "lineicons:map-marker-1",
	});
}

export default Component;
