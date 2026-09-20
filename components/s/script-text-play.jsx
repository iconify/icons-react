import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0npvtb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0npvtb5p"/>`,
		"fallback": "mdi:script-text-play",
	});
}

export default Component;
