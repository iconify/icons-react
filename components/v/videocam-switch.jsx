import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgw1eqx5t.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgw1eqx5t"/>`,
		"fallback": "zmdi:videocam-switch",
	});
}

export default Component;
