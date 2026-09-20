import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpovbmj2v.css';
import '../../css/j/j1pwc24pd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpovbmj2v"/><path clip-rule="evenodd" class="j1pwc24pd"/>`,
		"fallback": "qlementine-icons:sort-file-type-asc-16",
	});
}

export default Component;
