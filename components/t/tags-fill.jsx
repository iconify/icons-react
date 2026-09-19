import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv4waujmx.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv4waujmx"/>`,
		"fallback": "ant-design:tags-fill",
	});
}

export default Component;
