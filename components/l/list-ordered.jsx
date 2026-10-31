import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qb8r96btl.css';
import '../../css/p/ppdjxpb9o.css';
import '../../css/f/fv6jm6szg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="qb8r96btl wm-k"/><path class="ppdjxpb9o wm-a"/><path class="fv6jm6szg wm-deco"/></g>`,
		"fallback": "withicons-kawaii:list-ordered",
	});
}

export default Component;
