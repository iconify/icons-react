import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gctxmzx0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gctxmzx0v"/>`,
		"fallback": "streamline-logos:picasa-logo-solid",
	});
}

export default Component;
