import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf_e2ib-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf_e2ib-s"/>`,
		"fallback": "hugeicons:package-04",
	});
}

export default Component;
