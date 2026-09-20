import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxchu0bbf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jxchu0bbf"/>`,
		"fallback": "streamline:online-medical-service-monitor-remix",
	});
}

export default Component;
