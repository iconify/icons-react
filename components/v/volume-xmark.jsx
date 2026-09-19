import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1o6-hbig.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e1o6-hbig"/>`,
		"fallback": "gravity-ui:volume-xmark",
	});
}

export default Component;
