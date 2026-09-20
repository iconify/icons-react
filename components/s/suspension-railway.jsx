import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg0wxebyz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg0wxebyz"/>`,
		"fallback": "roentgen:suspension-railway",
	});
}

export default Component;
