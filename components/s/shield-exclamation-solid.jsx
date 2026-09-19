import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg8fvab-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vg8fvab-u"/>`,
		"fallback": "heroicons:shield-exclamation-solid",
	});
}

export default Component;
