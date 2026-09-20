import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at4gmo0jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="at4gmo0jk"/>`,
		"fallback": "streamline-logos:spinrilla-logo-solid",
	});
}

export default Component;
