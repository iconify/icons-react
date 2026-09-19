import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-qvd4btd.css';
import '../../css/i/izm7r3btk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-qvd4btd"/><path class="izm7r3btk"/>`,
		"fallback": "ion:ios-unlocked-outline",
	});
}

export default Component;
