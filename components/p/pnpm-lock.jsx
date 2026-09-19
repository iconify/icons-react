import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/m-24ijb3r.css';
import '../../css/l/l51cgrbhp.css';
import '../../css/k/kk3mezben.css';
import '../../css/o/o35zsh07e.css';
import '../../css/p/pxofu-yal.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="m-24ijb3r"/><path class="l51cgrbhp"/><path class="kk3mezben"/><path class="o35zsh07e"/><path class="pxofu-yal"/></g>`,
		"fallback": "catppuccin:pnpm-lock",
	});
}

export default Component;
