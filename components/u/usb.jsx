import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-6av_bac.css';
import '../../css/g/gw0lhg8wu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-6av_bac"/><path class="gw0lhg8wu"/>`,
		"fallback": "carbon:usb",
	});
}

export default Component;
