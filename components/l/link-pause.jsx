import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmn7gs-9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmn7gs-9i"/>`,
		"fallback": "tabler:link-pause",
	});
}

export default Component;
