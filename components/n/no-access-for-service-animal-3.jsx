import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u64em7bbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u64em7bbp"/>`,
		"fallback": "guidance:no-access-for-service-animal-3",
	});
}

export default Component;
