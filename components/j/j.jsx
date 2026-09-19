import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzx5i9bef.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzx5i9bef"/>`,
		"fallback": "file-icons:j",
	});
}

export default Component;
