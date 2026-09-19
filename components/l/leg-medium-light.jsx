import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j62qdlbdx.css';
import '../../css/e/etqgc7zzd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j62qdlbdx"/><path class="etqgc7zzd"/></g>`,
		"fallback": "fluent-emoji-flat:leg-medium-light",
	});
}

export default Component;
