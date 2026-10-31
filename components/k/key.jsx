import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/og7bcw3-q.css';
import '../../css/b/b-z7zjbfn.css';
import '../../css/i/itx5-fheu.css';
import '../../css/x/xpmjmd9yr.css';
import '../../css/v/vnfkbvmnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="og7bcw3-q"/><path class="b-z7zjbfn"/><path class="itx5-fheu wm-shine"/><path class="xpmjmd9yr"/><path class="vnfkbvmnw wm-deco"/></g>`,
		"fallback": "withicons-kawaii:key",
	});
}

export default Component;
