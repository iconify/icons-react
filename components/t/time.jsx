import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d47xi2b9o.css';
import '../../css/b/b1ahei25d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d47xi2b9o"/><path class="b1ahei25d"/>`,
		"fallback": "formkit:time",
	});
}

export default Component;
