import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-oso6bmy.css';
import '../../css/n/nhbth2b0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-oso6bmy"/><path class="nhbth2b0q"/>`,
		"fallback": "circum:medical-clipboard",
	});
}

export default Component;
