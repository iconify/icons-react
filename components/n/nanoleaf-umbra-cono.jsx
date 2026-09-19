import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbuxy4b5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbuxy4b5o"/>`,
		"fallback": "cbi:nanoleaf-umbra-cono",
	});
}

export default Component;
