import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yplqs3nsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yplqs3nsq"/>`,
		"fallback": "guidance:no-access-for-service-animal-2",
	});
}

export default Component;
