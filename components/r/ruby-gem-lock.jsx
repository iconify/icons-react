import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vxck0rbst.css';
import '../../css/m/mqkui3bsu.css';
import '../../css/m/m-24ijb3r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="vxck0rbst"/><path class="mqkui3bsu"/><path class="m-24ijb3r"/></g>`,
		"fallback": "catppuccin:ruby-gem-lock",
	});
}

export default Component;
