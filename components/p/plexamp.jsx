import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7h-_pb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7h-_pb_d"/>`,
		"fallback": "cbi:plexamp",
	});
}

export default Component;
