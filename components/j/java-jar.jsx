import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wyu27vjiy.css';
import '../../css/p/pi3vo114w.css';
import '../../css/k/kq93mc78v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wyu27vjiy"/><path class="pi3vo114w"/><path class="kq93mc78v"/></g>`,
		"fallback": "catppuccin:java-jar",
	});
}

export default Component;
