import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca_z99bhx.css';
import '../../css/n/nusyf_vqj.css';
import '../../css/w/wifu02bjh.css';
import '../../css/k/kkewfyjzc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca_z99bhx"/><path class="nusyf_vqj"/><path class="wifu02bjh"/><path class="kkewfyjzc"/>`,
		"fallback": "energy-icons:prescription-48",
	});
}

export default Component;
