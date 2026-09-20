import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j3mxzlont.css';
import '../../css/z/zdx4gpbfd.css';
import '../../css/h/hxmvn4bez.css';
import '../../css/t/tar4ktbfi.css';
import '../../css/e/ewt7nk-fj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j3mxzlont"/><path class="zdx4gpbfd"/><path class="hxmvn4bez"/><path class="tar4ktbfi"/><path class="ewt7nk-fj"/></g>`,
		"fallback": "solar:tv-linear",
	});
}

export default Component;
