import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ycvoifycr.css';
import '../../css/m/mcj161kcn.css';
import '../../css/v/vkwl1cc5e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ycvoifycr"/><path class="mcj161kcn"/><path class="vkwl1cc5e"/></g>`,
		"fallback": "fluent-emoji-flat:palms-up-together-medium-light",
	});
}

export default Component;
