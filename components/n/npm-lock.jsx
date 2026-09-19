import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/m-24ijb3r.css';
import '../../css/d/dbu_26btw.css';
import '../../css/b/bsg406b6i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="m-24ijb3r"/><path class="dbu_26btw"/><path class="bsg406b6i"/></g>`,
		"fallback": "catppuccin:npm-lock",
	});
}

export default Component;
