import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oqlau_bqu.css';
import '../../css/e/eef_c2eec.css';
import '../../css/n/nmx5ar_td.css';
import '../../css/c/crrgdt2cw.css';
import '../../css/i/iyusuckmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="oqlau_bqu wm-k"/><path class="eef_c2eec wm-a"/><path class="nmx5ar_td wm-k"/><path class="crrgdt2cw"/><path class="iyusuckmi"/></g>`,
		"fallback": "withicons-bauhaus:save-all",
	});
}

export default Component;
