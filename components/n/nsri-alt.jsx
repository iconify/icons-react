import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnjdskbit.css';

const viewBox = {"width":355,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rnjdskbit"/>`,
		"fallback": "file-icons:nsri-alt",
	});
}

export default Component;
