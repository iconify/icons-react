import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3xvq867s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3xvq867s"/>`,
		"fallback": "fa7-solid:vihara",
	});
}

export default Component;
