import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2x8u-v_h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2x8u-v_h"/>`,
		"fallback": "file-icons:templatetoolkit",
	});
}

export default Component;
