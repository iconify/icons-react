import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/b32gsdbth.css';
import '../../css/i/iwqeqib9j.css';
import '../../css/n/neojpkb-z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="b32gsdbth"/><path class="iwqeqib9j"/><path class="neojpkb-z"/></g>`,
		"fallback": "icon-park-outline:play-cycle",
	});
}

export default Component;
