import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi25j5b0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi25j5b0o"/>`,
		"fallback": "simple-icons:phosphoricons",
	});
}

export default Component;
