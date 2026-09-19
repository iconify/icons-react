import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g92amxlfl.css';
import '../../css/x/xnz_gs-_g.css';
import '../../css/j/jdh9hhorp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="g92amxlfl"/><path class="xnz_gs-_g"/><path class="jdh9hhorp"/></g>`,
		"fallback": "icon-park-outline:watch",
	});
}

export default Component;
