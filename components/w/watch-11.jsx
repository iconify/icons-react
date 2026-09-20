import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjo077brx.css';
import '../../css/x/x4_qz_bvx.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjo077brx"/><path class="x4_qz_bvx"/>`,
		"fallback": "maki:watch-11",
	});
}

export default Component;
