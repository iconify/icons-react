import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xya1qabtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xya1qabtp"/>`,
		"fallback": "ri:volume-up-fill",
	});
}

export default Component;
