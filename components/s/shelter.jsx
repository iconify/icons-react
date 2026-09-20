import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9nt0wt0f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9nt0wt0f"/>`,
		"fallback": "roentgen:shelter",
	});
}

export default Component;
