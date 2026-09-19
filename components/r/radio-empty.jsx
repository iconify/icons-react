import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt4-etjxu.css';

const viewBox = {"width":304,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt4-etjxu"/>`,
		"fallback": "ps:radio-empty",
	});
}

export default Component;
