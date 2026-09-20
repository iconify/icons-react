import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lor2r5p4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lor2r5p4i"/>`,
		"fallback": "streamline-ultimate:multiple-neutral-2",
	});
}

export default Component;
