import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5i-nj0rt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5i-nj0rt"/>`,
		"fallback": "icomoon-free:redo2",
	});
}

export default Component;
