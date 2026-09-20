import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_n8jw0cs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_n8jw0cs"/>`,
		"fallback": "si:play-line",
	});
}

export default Component;
