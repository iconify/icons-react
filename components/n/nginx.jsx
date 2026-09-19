import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilvw46oto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilvw46oto"/>`,
		"fallback": "cbi:nginx",
	});
}

export default Component;
