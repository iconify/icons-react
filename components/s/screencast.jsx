import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/k/k7mzm_btg.css';
import '../../css/y/y7k7t2bsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="k7mzm_btg"/><path class="y7k7t2bsl"/></g>`,
		"fallback": "tdesign:screencast",
	});
}

export default Component;
