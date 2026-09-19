import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlel97gzg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlel97gzg"/>`,
		"fallback": "garden:moon-fill-16",
	});
}

export default Component;
