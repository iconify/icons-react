import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1fr8ybcl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u1fr8ybcl"/>`,
		"fallback": "streamline:vr-headset-2-solid",
	});
}

export default Component;
