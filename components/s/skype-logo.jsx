import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2ez4zu5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2ez4zu5p"/>`,
		"fallback": "streamline-ultimate:skype-logo",
	});
}

export default Component;
