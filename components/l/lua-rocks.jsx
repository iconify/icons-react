import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xb1ai900p.css';
import '../../css/r/r8vvjsboo.css';
import '../../css/h/hd21vcc-n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="xb1ai900p"/><path class="r8vvjsboo"/></g><path class="hd21vcc-n"/>`,
		"fallback": "catppuccin:lua-rocks",
	});
}

export default Component;
