import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy6nseels.css';
import '../../css/q/qbt4lgb4f.css';
import '../../css/i/i5jz4wyel.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy6nseels"/><path class="qbt4lgb4f"/><path class="i5jz4wyel"/>`,
		"fallback": "selfhst:senlo",
	});
}

export default Component;
