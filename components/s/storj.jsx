import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_ruqhyhp.css';
import '../../css/p/p95k6o2lr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_ruqhyhp"/><path clip-rule="evenodd" class="p95k6o2lr"/>`,
		"fallback": "token:storj",
	});
}

export default Component;
