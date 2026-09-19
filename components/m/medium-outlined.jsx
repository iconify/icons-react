import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3zufr8vh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3zufr8vh"/>`,
		"fallback": "ant-design:medium-outlined",
	});
}

export default Component;
