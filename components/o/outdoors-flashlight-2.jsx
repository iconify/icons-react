import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q0cfcrpql.css';
import '../../css/t/t-b8inb6f.css';
import '../../css/l/l5nlj20ve.css';
import '../../css/y/ymso5wbov.css';
import '../../css/f/fuili0tsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q0cfcrpql"/><path class="t-b8inb6f"/><path class="l5nlj20ve"/><path class="ymso5wbov"/><path class="fuili0tsl"/></g>`,
		"fallback": "streamline-ultimate-color:outdoors-flashlight-2",
	});
}

export default Component;
