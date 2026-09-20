import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2g16ob1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o2g16ob1s"/>`,
		"fallback": "streamline-logos:niconico-logo-2-solid",
	});
}

export default Component;
