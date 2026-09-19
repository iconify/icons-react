import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbz_imbuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbz_imbuf"/>`,
		"fallback": "cbi:scene-dimmed",
	});
}

export default Component;
