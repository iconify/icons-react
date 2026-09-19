import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acem6c_hd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acem6c_hd"/>`,
		"fallback": "cbi:jtexpress",
	});
}

export default Component;
