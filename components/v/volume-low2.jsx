import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/ka8z1rfad.css';
import '../../css/y/ypd_oq20j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ka8z1rfad"/><path class="ypd_oq20j"/></g>`,
		"fallback": "reicon:volume-low2",
	});
}

export default Component;
