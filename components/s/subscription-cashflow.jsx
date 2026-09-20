import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zbjfupicf.css';
import '../../css/m/m_3aspbzd.css';
import '../../css/p/psq-e9bgh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zbjfupicf"/><path class="m_3aspbzd"/><path class="psq-e9bgh"/></g>`,
		"fallback": "streamline:subscription-cashflow",
	});
}

export default Component;
