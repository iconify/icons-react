import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlrq40rat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlrq40rat"/>`,
		"fallback": "tabler:sign-left-filled",
	});
}

export default Component;
