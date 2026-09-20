import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jna0gjxxo.css';
import '../../css/v/vmoz_sbjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jna0gjxxo"/><path class="vmoz_sbjr"/></g>`,
		"fallback": "streamline-sharp:news-paper",
	});
}

export default Component;
