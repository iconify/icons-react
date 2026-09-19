import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3d6jdbog.css';

const viewBox = {"width":1024,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3d6jdbog"/>`,
		"fallback": "fa:jpy",
	});
}

export default Component;
