import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsa0oe37a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsa0oe37a"/>`,
		"fallback": "mdi:printer-pos-play-outline",
	});
}

export default Component;
