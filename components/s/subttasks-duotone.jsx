import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/j/jisnx7b0h.css';
import '../../css/i/iesglkbjm.css';
import '../../css/y/y_vvfqmcp.css';
import '../../css/g/gph2l2k-x.css';
import '../../css/u/u3i10hqhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><rect transform="rotate(90 18 9)" class="jisnx7b0h"/><rect transform="rotate(90 18 17)" class="iesglkbjm"/><rect transform="rotate(-90 3 7)" class="y_vvfqmcp"/><path class="gph2l2k-x"/><path class="u3i10hqhh"/></g>`,
		"fallback": "lets-icons:subttasks-duotone",
	});
}

export default Component;
