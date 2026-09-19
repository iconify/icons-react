import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u6sf2yaha.css';
import '../../css/n/n2uwyqbsw.css';
import '../../css/i/ie281-b7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u6sf2yaha"/><path class="n2uwyqbsw"/><path class="ie281-b7z"/></g>`,
		"fallback": "hugeicons:stroke-center",
	});
}

export default Component;
