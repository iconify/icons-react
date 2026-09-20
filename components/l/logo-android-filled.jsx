import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdkk788_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdkk788_a"/>`,
		"fallback": "tdesign:logo-android-filled",
	});
}

export default Component;
