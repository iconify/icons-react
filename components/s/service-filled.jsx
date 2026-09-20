import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqu85rp4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqu85rp4f"/>`,
		"fallback": "tdesign:service-filled",
	});
}

export default Component;
