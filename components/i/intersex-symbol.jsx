import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfmcfcxib.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfmcfcxib"/>`,
		"fallback": "streamline-flex-color:intersex-symbol",
	});
}

export default Component;
