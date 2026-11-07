import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h21hmgjli.css';
import '../../css/e/esqvhtbwf.css';
import '../../css/q/qqgi4e04c.css';
import '../../css/t/t7fjfmboq.css';
import '../../css/z/zgg5gabcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h21hmgjli"/><path class="esqvhtbwf"/><path class="qqgi4e04c"/><path class="t7fjfmboq"/><path class="zgg5gabcf"/>`,
		"fallback": "solar:moon-fog-bold",
	});
}

export default Component;
