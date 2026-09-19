import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ul6gg1m4d.css';
import '../../css/s/sitb2ibko.css';
import '../../css/x/xs42-rkmr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ul6gg1m4d"/><path class="sitb2ibko"/><path class="xs42-rkmr"/></g>`,
		"fallback": "pepicons:taxi-print",
	});
}

export default Component;
