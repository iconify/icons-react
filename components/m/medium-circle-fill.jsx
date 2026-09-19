import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy1d9zbpp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy1d9zbpp"/>`,
		"fallback": "ant-design:medium-circle-fill",
	});
}

export default Component;
