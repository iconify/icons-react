import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bma74xb0j.css';

const viewBox = {"width":405,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bma74xb0j"/>`,
		"fallback": "file-icons:lime",
	});
}

export default Component;
