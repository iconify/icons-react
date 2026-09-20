import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjc_8vffs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjc_8vffs"/>`,
		"fallback": "ix:radio-waves-warning",
	});
}

export default Component;
