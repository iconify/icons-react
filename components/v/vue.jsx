import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfttfe_2y.css';
import '../../css/v/vt5inqbvm.css';
import '../../css/w/w7622wbzz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qfttfe_2y"><path class="vt5inqbvm"/><path class="w7622wbzz"/></g>`,
		"fallback": "catppuccin:vue",
	});
}

export default Component;
