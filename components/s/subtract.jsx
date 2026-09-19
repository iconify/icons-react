import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if3b41utp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if3b41utp"/>`,
		"fallback": "bi:subtract",
	});
}

export default Component;
