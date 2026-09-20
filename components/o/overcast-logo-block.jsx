import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3m_2pbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v3m_2pbzx"/>`,
		"fallback": "streamline-logos:overcast-logo-block",
	});
}

export default Component;
