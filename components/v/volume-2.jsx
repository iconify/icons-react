import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/d/d4xgu9b9g.css';
import '../../css/x/x8wgkgyun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="d4xgu9b9g"/><path class="x8wgkgyun"/></g>`,
		"fallback": "humbleicons:volume-2",
	});
}

export default Component;
