import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkj04estn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pkj04estn"/>`,
		"fallback": "qlementine-icons:voicemail-16",
	});
}

export default Component;
