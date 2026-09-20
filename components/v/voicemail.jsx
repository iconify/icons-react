import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1pc0bbci.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1pc0bbci"/>`,
		"fallback": "wpf:voicemail",
	});
}

export default Component;
