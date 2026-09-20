import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glgz8bu0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="glgz8bu0g"/>`,
		"fallback": "reicon:presentation-play-filled",
	});
}

export default Component;
