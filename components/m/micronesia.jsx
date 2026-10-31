import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpfjsd0jn.css';
import '../../css/i/iqumv76zj.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpfjsd0jn"/><path class="iqumv76zj"/>`,
		"fallback": "tabler-flags:micronesia",
	});
}

export default Component;
