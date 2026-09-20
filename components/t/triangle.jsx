import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bthvc4b9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bthvc4b9g"/>`,
		"fallback": "tabler:triangle",
	});
}

export default Component;
