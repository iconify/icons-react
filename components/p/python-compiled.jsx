import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/q2cbt3b-c.css';
import '../../css/x/x_er3gb5y.css';
import '../../css/g/gsr5-p44z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="q2cbt3b-c"/><path class="x_er3gb5y"/><path class="gsr5-p44z"/></g>`,
		"fallback": "catppuccin:python-compiled",
	});
}

export default Component;
