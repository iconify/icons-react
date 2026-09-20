import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs6xi3b2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs6xi3b2o"/>`,
		"fallback": "mynaui:subtract",
	});
}

export default Component;
