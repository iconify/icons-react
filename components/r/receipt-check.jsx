import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cvcf3qzlu.css';
import '../../css/n/ngodbcbus.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cvcf3qzlu"/><path class="ngodbcbus"/></g>`,
		"fallback": "streamline:receipt-check",
	});
}

export default Component;
