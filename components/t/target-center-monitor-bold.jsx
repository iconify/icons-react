import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oytsm6b5s.css';
import '../../css/d/dxu2gubtq.css';
import '../../css/j/j9hxiotjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oytsm6b5s"/><path class="dxu2gubtq"/><path class="j9hxiotjy"/>`,
		"fallback": "streamline-ultimate:target-center-monitor-bold",
	});
}

export default Component;
