import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1up5se8h.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1up5se8h"/>`,
		"fallback": "ant-design:merge-cells-outlined",
	});
}

export default Component;
