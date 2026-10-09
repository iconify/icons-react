import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcanjw_pl.css';
import '../../css/w/wx8v4gq2k.css';
import '../../css/z/zrbbkmbeu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcanjw_pl"/><path class="wx8v4gq2k"/><path class="zrbbkmbeu"/>`,
		"fallback": "energy-icons:vector-pen-48",
	});
}

export default Component;
