import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqs_8pbmm.css';
import '../../css/k/k67ptjbwx.css';
import '../../css/n/nvywobb1g.css';
import '../../css/p/pse5d0bkp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqs_8pbmm"/><path class="k67ptjbwx"/><path class="nvywobb1g"/><path class="pse5d0bkp"/>`,
		"fallback": "energy-icons:solar-tracker-48-bold",
	});
}

export default Component;
