import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tosz15bww.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tosz15bww"/>`,
		"fallback": "bi:voicemail",
	});
}

export default Component;
