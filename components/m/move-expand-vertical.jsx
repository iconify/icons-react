import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajpwr3bbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajpwr3bbj"/>`,
		"fallback": "streamline-ultimate:move-expand-vertical",
	});
}

export default Component;
