import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm1m_2hku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm1m_2hku"/>`,
		"fallback": "streamline-sharp:select-all",
	});
}

export default Component;
