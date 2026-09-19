import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7w0g9z2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7w0g9z2o"/>`,
		"fallback": "file-icons:minizinc",
	});
}

export default Component;
