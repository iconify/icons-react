import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhogt5lio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhogt5lio"/>`,
		"fallback": "tabler:navigation-pause",
	});
}

export default Component;
