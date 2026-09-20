import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buse0cc_w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buse0cc_w"/>`,
		"fallback": "ix:live-schedule",
	});
}

export default Component;
