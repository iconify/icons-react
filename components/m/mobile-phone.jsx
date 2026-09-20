import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2f32u7hy.css';
import '../../css/p/pfssstxrq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r2f32u7hy"/><path class="pfssstxrq"/>`,
		"fallback": "ix:mobile-phone",
	});
}

export default Component;
