import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn0wn_bdh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn0wn_bdh"/>`,
		"fallback": "ant-design:radar-chart",
	});
}

export default Component;
