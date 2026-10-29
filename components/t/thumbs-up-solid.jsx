import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvto10b7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvto10b7w"/>`,
		"fallback": "withicons:thumbs-up-solid",
	});
}

export default Component;
