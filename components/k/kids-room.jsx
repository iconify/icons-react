import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnyvjw2vw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnyvjw2vw"/>`,
		"fallback": "cbi:kids-room",
	});
}

export default Component;
