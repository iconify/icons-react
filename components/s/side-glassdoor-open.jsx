import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9wp55b9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9wp55b9q"/>`,
		"fallback": "cbi:side-glassdoor-open",
	});
}

export default Component;
