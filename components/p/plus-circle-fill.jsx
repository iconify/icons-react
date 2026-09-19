import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq50plqvm.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq50plqvm"/>`,
		"fallback": "ant-design:plus-circle-fill",
	});
}

export default Component;
