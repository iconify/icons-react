import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hj8tmj6jq.css';
import '../../css/f/fxo16bbjw.css';
import '../../css/u/u9ltmbbpb.css';
import '../../css/r/roaf1_b0h.css';
import '../../css/c/cu5ei1b8f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hj8tmj6jq"/><path class="fxo16bbjw"/><path class="u9ltmbbpb"/><path class="roaf1_b0h"/><path class="cu5ei1b8f"/></g>`,
		"fallback": "glyphs:pencil-paintbrush-duo",
	});
}

export default Component;
