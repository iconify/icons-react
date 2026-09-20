import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge-w7b-ez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge-w7b-ez"/>`,
		"fallback": "ri:openbase-fill",
	});
}

export default Component;
