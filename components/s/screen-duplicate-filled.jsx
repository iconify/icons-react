import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spg-nfber.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spg-nfber"/>`,
		"fallback": "ix:screen-duplicate-filled",
	});
}

export default Component;
