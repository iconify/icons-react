import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1g2ogzoa.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1g2ogzoa"/>`,
		"fallback": "fa7-solid:person-half-dress",
	});
}

export default Component;
