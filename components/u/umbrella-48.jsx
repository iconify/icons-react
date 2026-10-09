import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfommlbzh.css';
import '../../css/f/fhdrc_nuc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfommlbzh"/><path class="fhdrc_nuc"/>`,
		"fallback": "energy-icons:umbrella-48",
	});
}

export default Component;
