import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luejbu8oj.css';
import '../../css/k/k9kao6i0w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luejbu8oj"/><path clip-rule="evenodd" class="k9kao6i0w"/>`,
		"fallback": "qlementine-icons:server-16",
	});
}

export default Component;
