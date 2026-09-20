import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i00j8oboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i00j8oboe"/>`,
		"fallback": "streamline-logos:kik-logo-2-solid",
	});
}

export default Component;
