import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kqm9nfguj.css';
import '../../css/u/u0uv7qbej.css';
import '../../css/p/pwyf_lt5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kqm9nfguj"/><path class="u0uv7qbej"/><path class="pwyf_lt5p"/></g>`,
		"fallback": "streamline-ultimate:microsoft-excel-logo",
	});
}

export default Component;
