import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu5_bjb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu5_bjb4l"/>`,
		"fallback": "simple-icons:rtm",
	});
}

export default Component;
