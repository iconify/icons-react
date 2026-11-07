import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy-8fjbld.css';
import '../../css/t/tuls07bzf.css';
import '../../css/m/m55y7wb9u.css';
import '../../css/w/w50iduokj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy-8fjbld"/><path class="tuls07bzf"/><path class="m55y7wb9u"/><path class="w50iduokj"/>`,
		"fallback": "solar:skirt-bold-duotone",
	});
}

export default Component;
