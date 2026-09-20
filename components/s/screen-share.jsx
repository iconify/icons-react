import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx1u3jb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx1u3jb0d"/>`,
		"fallback": "tabler:screen-share",
	});
}

export default Component;
