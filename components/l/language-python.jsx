import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoyz_kbtk.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoyz_kbtk"/>`,
		"fallback": "zmdi:language-python",
	});
}

export default Component;
