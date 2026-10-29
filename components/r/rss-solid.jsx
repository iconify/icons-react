import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vk5babcpw.css';
import '../../css/d/dm-5edbrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vk5babcpw"/><path class="dm-5edbrc wm-a"/></g>`,
		"fallback": "withicons:rss-solid",
	});
}

export default Component;
