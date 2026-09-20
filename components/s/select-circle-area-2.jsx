import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-7ny1epj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-7ny1epj"/>`,
		"fallback": "streamline-sharp:select-circle-area-2",
	});
}

export default Component;
