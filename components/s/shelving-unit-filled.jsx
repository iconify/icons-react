import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv7m_e6md.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jv7m_e6md"/>`,
		"fallback": "lucide-extended:shelving-unit-filled",
	});
}

export default Component;
