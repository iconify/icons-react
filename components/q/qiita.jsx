import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-wmb0bhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-wmb0bhs"/>`,
		"fallback": "thesvg-color:qiita",
	});
}

export default Component;
