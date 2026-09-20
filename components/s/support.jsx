import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/audo1xb5t.css';
import '../../css/v/vbbpf97ga.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="audo1xb5t"/><path class="vbbpf97ga"/>`,
		"fallback": "lineicons:support",
	});
}

export default Component;
