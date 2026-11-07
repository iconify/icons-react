import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u7mrcgb5f.css';
import '../../css/b/bcjcfx97b.css';
import '../../css/d/dkl7vo9ud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u7mrcgb5f"/><path class="bcjcfx97b"/><path class="dkl7vo9ud"/></g>`,
		"fallback": "solar:streets-navigation-linear",
	});
}

export default Component;
