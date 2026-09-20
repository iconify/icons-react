import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sis17fb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sis17fb4j"/>`,
		"fallback": "tdesign:traffic-events-filled",
	});
}

export default Component;
