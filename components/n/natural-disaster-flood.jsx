import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozk9hsu3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozk9hsu3q"/>`,
		"fallback": "streamline-ultimate:natural-disaster-flood",
	});
}

export default Component;
