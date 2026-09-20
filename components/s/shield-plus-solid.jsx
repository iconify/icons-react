import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi4z6zb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi4z6zb3b"/>`,
		"fallback": "mynaui:shield-plus-solid",
	});
}

export default Component;
