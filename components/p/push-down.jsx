import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiyza0b9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiyza0b9a"/>`,
		"fallback": "gg:push-down",
	});
}

export default Component;
