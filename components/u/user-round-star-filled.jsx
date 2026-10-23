import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r21m_6bay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r21m_6bay"/>`,
		"fallback": "lucide-extended:user-round-star-filled",
	});
}

export default Component;
