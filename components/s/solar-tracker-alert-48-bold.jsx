import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqs_8pbmm.css';
import '../../css/c/c-9yccowm.css';
import '../../css/c/cpqrj-bqc.css';
import '../../css/o/orezepfbe.css';
import '../../css/y/ygtv74bcc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqs_8pbmm"/><path class="c-9yccowm"/><path class="cpqrj-bqc"/><path class="orezepfbe"/><path class="ygtv74bcc"/>`,
		"fallback": "energy-icons:solar-tracker-alert-48-bold",
	});
}

export default Component;
