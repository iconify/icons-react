import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex7dwfbmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ex7dwfbmi"/>`,
		"fallback": "streamline-logos:reason-studios-logo-solid",
	});
}

export default Component;
