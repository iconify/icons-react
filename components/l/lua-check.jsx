import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dbm-q69tj.css';
import '../../css/n/n2vaf58fj.css';
import '../../css/r/r-o2b4qju.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="dbm-q69tj"/><path class="n2vaf58fj"/><path class="r-o2b4qju"/></g>`,
		"fallback": "catppuccin:lua-check",
	});
}

export default Component;
