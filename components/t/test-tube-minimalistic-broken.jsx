import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2kv1rb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2kv1rb-y"/>`,
		"fallback": "solar:test-tube-minimalistic-broken",
	});
}

export default Component;
