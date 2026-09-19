import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3aqexy4d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b3aqexy4d"/>`,
		"fallback": "heroicons:stop-circle-16-solid",
	});
}

export default Component;
