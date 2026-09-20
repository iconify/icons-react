import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smhe7gbkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smhe7gbkt"/>`,
		"fallback": "tdesign:table-filled",
	});
}

export default Component;
