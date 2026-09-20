import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzjpt7h1x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzjpt7h1x"/>`,
		"fallback": "roentgen:survey-point",
	});
}

export default Component;
