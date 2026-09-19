import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f55vo7bfa.css';
import '../../css/h/h3jrti43j.css';
import '../../css/a/ahck4kpve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f55vo7bfa"/><path class="h3jrti43j"/><path class="ahck4kpve"/></g>`,
		"fallback": "hugeicons:napkins-02",
	});
}

export default Component;
