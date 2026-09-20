import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zmpak2byc.css';
import '../../css/a/ab6cq2jfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zmpak2byc"/><path class="ab6cq2jfo"/></g>`,
		"fallback": "streamline-sharp:investing-and-banking",
	});
}

export default Component;
