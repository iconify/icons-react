import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/d/d3i_osbsh.css';
import '../../css/s/skxoanbei.css';
import '../../css/h/hzgt60rqb.css';
import '../../css/y/ypowfxgrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="d3i_osbsh"/><path class="skxoanbei"/><path class="hzgt60rqb"/><path class="ypowfxgrp"/></g>`,
		"fallback": "matita:key",
	});
}

export default Component;
