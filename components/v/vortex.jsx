import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3cn6cc3b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3cn6cc3b"/>`,
		"fallback": "at-icons:vortex",
	});
}

export default Component;
