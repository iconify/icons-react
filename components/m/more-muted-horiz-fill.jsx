import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsemppb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsemppb5a"/>`,
		"fallback": "si:more-muted-horiz-fill",
	});
}

export default Component;
