import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dc3y81tcn.css';
import '../../css/x/xx1c4jb9g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="dc3y81tcn"/><path class="xx1c4jb9g"/></g>`,
		"fallback": "catppuccin:unocss",
	});
}

export default Component;
