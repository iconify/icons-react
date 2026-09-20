import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0f03ubam.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0f03ubam"/>`,
		"fallback": "ix:namur-out-of-spec-filled",
	});
}

export default Component;
