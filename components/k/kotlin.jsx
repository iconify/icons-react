import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/idhp54srj.css';
import '../../css/p/p3vjo6b9i.css';
import '../../css/r/rzwofibir.css';
import '../../css/v/vzt-j8h2r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="idhp54srj"/><path class="p3vjo6b9i"/><path class="rzwofibir"/><path class="vzt-j8h2r"/></g>`,
		"fallback": "catppuccin:kotlin",
	});
}

export default Component;
