import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw2o4bb5e.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw2o4bb5e"/>`,
		"fallback": "devicon-plain:trello-wordmark",
	});
}

export default Component;
