import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilw1vqb3q.css';
import '../../css/n/ndpi73byy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilw1vqb3q"/><path class="ndpi73byy"/>`,
		"fallback": "octicon:tracked-by-closed-not-planned-24",
	});
}

export default Component;
