import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g-vmp1bpt.css';
import '../../css/t/tdirdccsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g-vmp1bpt"/><path class="tdirdccsl"/></g>`,
		"fallback": "iconamoon:playlist-repeat-song-light",
	});
}

export default Component;
