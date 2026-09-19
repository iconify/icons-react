import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vmagrtgce.css';
import '../../css/x/xwyy6_3ln.css';
import '../../css/a/azz4f8r2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vmagrtgce"/><path class="xwyy6_3ln"/><path class="azz4f8r2k"/></g>`,
		"fallback": "hugeicons:mail-setting-01",
	});
}

export default Component;
