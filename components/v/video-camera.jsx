import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agr3pubbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agr3pubbu"/>`,
		"fallback": "heroicons-outline:video-camera",
	});
}

export default Component;
