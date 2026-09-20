import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x89hjr71f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x89hjr71f"/>`,
		"fallback": "lsicon:user-leave-filled",
	});
}

export default Component;
