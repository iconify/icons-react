import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
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
		"content": `<g class="pr52f_b5y"><path class="g-vmp1bpt"/><path class="tdirdccsl"/></g>`,
		"fallback": "iconamoon:playlist-repeat-song-thin",
	});
}

export default Component;
