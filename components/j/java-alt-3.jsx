import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wyu27vjiy.css';
import '../../css/o/o-dtb8b9e.css';
import '../../css/r/rd9dh3d5v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wyu27vjiy"/><path class="o-dtb8b9e"/><path class="rd9dh3d5v"/></g>`,
		"fallback": "catppuccin:java-alt-3",
	});
}

export default Component;
