import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3hp3ccry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s3hp3ccry"/>`,
		"fallback": "keyline-icons:tag-fill",
	});
}

export default Component;
