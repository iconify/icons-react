import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1edu7bqk.css';
import '../../css/m/mf8977brh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z1edu7bqk"/><path clip-rule="evenodd" class="mf8977brh"/>`,
		"fallback": "qlementine-icons:square-2-16",
	});
}

export default Component;
