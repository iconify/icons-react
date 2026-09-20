import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esg-30b0c.css';
import '../../css/e/e6yhmq1dy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esg-30b0c"/><path class="e6yhmq1dy"/>`,
		"fallback": "stash:user-shield-duotone",
	});
}

export default Component;
