import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl6warb1x.css';
import '../../css/b/bjk_wjbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl6warb1x"/><path class="bjk_wjbnw"/>`,
		"fallback": "boxicons:location-check",
	});
}

export default Component;
