import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi4gflb_o.css';
import '../../css/s/srtt_j7am.css';
import '../../css/z/zv6lc8bha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fi4gflb_o"/><path class="srtt_j7am"/><path class="zv6lc8bha"/>`,
		"fallback": "token:vsta",
	});
}

export default Component;
