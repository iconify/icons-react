import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o10psrw2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o10psrw2x"/>`,
		"fallback": "coolicons:panel-right-open-fill-round",
	});
}

export default Component;
