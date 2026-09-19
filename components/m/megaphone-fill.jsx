import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6hb5pd3i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6hb5pd3i"/>`,
		"fallback": "bi:megaphone-fill",
	});
}

export default Component;
