import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj38uwk8s.css';
import '../../css/a/aae6-0eex.css';
import '../../css/z/zdere3b2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="uj38uwk8s"><path class="aae6-0eex"/><circle class="zdere3b2f"/></g>`,
		"fallback": "thesvg-color:togetherdotai",
	});
}

export default Component;
