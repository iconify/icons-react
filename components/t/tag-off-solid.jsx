import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph83qph3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph83qph3k"/>`,
		"fallback": "iconaut:tag-off-solid",
	});
}

export default Component;
