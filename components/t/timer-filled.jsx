import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un164r4db.css';
import '../../css/m/m_0bwy7ii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="un164r4db"/><path class="m_0bwy7ii"/>`,
		"fallback": "lucide-extended:timer-filled",
	});
}

export default Component;
