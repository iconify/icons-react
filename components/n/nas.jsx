import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4m_o9b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4m_o9b6w"/>`,
		"fallback": "cbi:nas",
	});
}

export default Component;
