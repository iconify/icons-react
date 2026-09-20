import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-6ekh5os.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-6ekh5os"/>`,
		"fallback": "keyline-icons:plane-sharp-duotone",
	});
}

export default Component;
