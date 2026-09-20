import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxptqbfgi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxptqbfgi"/>`,
		"fallback": "sidekickicons:radial-rays-16-solid",
	});
}

export default Component;
