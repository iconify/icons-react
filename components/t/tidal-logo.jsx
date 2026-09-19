import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjmi7louc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjmi7louc"/>`,
		"fallback": "cbi:tidal-logo",
	});
}

export default Component;
