import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy4ci9b-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qy4ci9b-g"/>`,
		"fallback": "streamline-sharp:no-photo-taking-zone-solid",
	});
}

export default Component;
