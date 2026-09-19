import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7obs5b9u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7obs5b9u"/>`,
		"fallback": "ant-design:reload-time-outline",
	});
}

export default Component;
