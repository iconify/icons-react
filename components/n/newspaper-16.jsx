import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzluoob0q.css';
import '../../css/s/sgpqfi7th.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzluoob0q"/><path clip-rule="evenodd" class="sgpqfi7th"/>`,
		"fallback": "qlementine-icons:newspaper-16",
	});
}

export default Component;
