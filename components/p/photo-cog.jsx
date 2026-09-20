import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c61nzzbwc.css';
import '../../css/d/dd8fdwgpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c61nzzbwc"/><path class="dd8fdwgpb"/></g>`,
		"fallback": "tabler:photo-cog",
	});
}

export default Component;
