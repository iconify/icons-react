import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv6zem8uc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv6zem8uc"/>`,
		"fallback": "ant-design:like-outlined",
	});
}

export default Component;
