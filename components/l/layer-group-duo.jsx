import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6yze9bve.css';
import '../../css/d/dmatdn5xb.css';
import '../../css/n/nzb9c50ih.css';
import '../../css/g/g89kkeb5g.css';
import '../../css/p/ptdsbkbld.css';
import '../../css/l/lpjqmxrze.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x6yze9bve"/><path class="dmatdn5xb"/><path class="nzb9c50ih"/><path class="g89kkeb5g"/><path class="ptdsbkbld"/><path class="lpjqmxrze"/></g>`,
		"fallback": "glyphs:layer-group-duo",
	});
}

export default Component;
