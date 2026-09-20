import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6m6xlb6p.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6m6xlb6p"/>`,
		"fallback": "temaki:movie-rental",
	});
}

export default Component;
