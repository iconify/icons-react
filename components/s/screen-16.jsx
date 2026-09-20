import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta5p_muku.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ta5p_muku"/>`,
		"fallback": "qlementine-icons:screen-16",
	});
}

export default Component;
