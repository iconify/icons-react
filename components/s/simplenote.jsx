import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbj_h5bon.css';

const viewBox = {"width":464,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbj_h5bon"/>`,
		"fallback": "ps:simplenote",
	});
}

export default Component;
