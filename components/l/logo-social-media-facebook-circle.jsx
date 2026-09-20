import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbzv6vbxl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbzv6vbxl"/>`,
		"fallback": "streamline-pixel:logo-social-media-facebook-circle",
	});
}

export default Component;
