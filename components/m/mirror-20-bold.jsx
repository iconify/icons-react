import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqrfxzblb.css';
import '../../css/e/e5nrzwjsg.css';
import '../../css/f/fh8bft_rz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqrfxzblb"/><path class="e5nrzwjsg"/><path class="fh8bft_rz"/>`,
		"fallback": "energy-icons:mirror-20-bold",
	});
}

export default Component;
