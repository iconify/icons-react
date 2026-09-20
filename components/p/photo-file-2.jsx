import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/y/y4s8dq4pl.css';
import '../../css/e/eheuvvbdy.css';
import '../../css/n/n8z6fbc2v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="y4s8dq4pl"/><path class="eheuvvbdy"/><path class="n8z6fbc2v"/></g>`,
		"fallback": "streamline-kameleon-color:photo-file-2",
	});
}

export default Component;
