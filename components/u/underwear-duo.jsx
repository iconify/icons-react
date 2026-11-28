import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3mnygnvh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p9qo8bcky.css';
import '../../css/z/za6iimbye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3mnygnvh secondary"/><g class="dt0cm9dhy primary"><path class="p9qo8bcky"/><path class="za6iimbye"/></g>`,
		"fallback": "iconaut:underwear-duo",
	});
}

export default Component;
