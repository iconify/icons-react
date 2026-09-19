import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg2am7bzu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg2am7bzu"/>`,
		"fallback": "ant-design:meh-outline",
	});
}

export default Component;
