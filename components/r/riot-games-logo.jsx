import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqqyqm4-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqqyqm4-i"/>`,
		"fallback": "streamline-logos:riot-games-logo",
	});
}

export default Component;
