import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3m_32d1b.css';
import '../../css/m/mvqkmbccf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3m_32d1b"/><path class="mvqkmbccf"/>`,
		"fallback": "pixel:question-circle",
	});
}

export default Component;
