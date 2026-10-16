import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx_kaouwn.css';
import '../../css/v/vd-f58bld.css';
import '../../css/w/wqm03x8_d.css';
import '../../css/w/w6rqdqpvm.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx_kaouwn"/><path class="vd-f58bld"/><path class="wqm03x8_d"/><path class="w6rqdqpvm"/>`,
		"fallback": "thesvg-color:sunshine",
	});
}

export default Component;
