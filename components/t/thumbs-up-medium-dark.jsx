import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xq4_jfbuz.css';
import '../../css/s/svd9swn2f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xq4_jfbuz"/><path class="svd9swn2f"/></g>`,
		"fallback": "fluent-emoji-flat:thumbs-up-medium-dark",
	});
}

export default Component;
