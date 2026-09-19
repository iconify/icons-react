import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br4hz9-6v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br4hz9-6v"/>`,
		"fallback": "bi:leaf-fill",
	});
}

export default Component;
