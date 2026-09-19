import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_08yzbiq.css';

const viewBox = {"width":464,"height":504};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_08yzbiq"/>`,
		"fallback": "ps:tag",
	});
}

export default Component;
