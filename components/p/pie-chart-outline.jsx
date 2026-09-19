import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a1ag6vmcj.css';
import '../../css/h/h7nduwp1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pie-chart-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="a1ag6vmcj"/><path class="h7nduwp1f"/></g></g>`,
		"fallback": "cuida:pie-chart-outline",
	});
}

export default Component;
