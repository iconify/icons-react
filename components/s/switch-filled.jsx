import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5rgj7ipz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b5rgj7ipz"/>`,
		"fallback": "lsicon:switch-filled",
	});
}

export default Component;
