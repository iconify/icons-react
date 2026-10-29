import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bbcydobej.css';
import '../../css/f/fphrgdbid.css';
import '../../css/s/s79748p-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bbcydobej"/><path class="fphrgdbid"/><path class="s79748p-x"/></g>`,
		"fallback": "withicons-bauhaus:piano",
	});
}

export default Component;
