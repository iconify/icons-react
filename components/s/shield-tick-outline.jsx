import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zcrig_nhd.css';
import '../../css/p/piq9lw_yy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="shield-tick-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="zcrig_nhd"/><path class="piq9lw_yy"/></g></g>`,
		"fallback": "cuida:shield-tick-outline",
	});
}

export default Component;
