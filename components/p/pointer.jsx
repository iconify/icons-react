import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fek3nqbkv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fek3nqbkv"/>`,
		"fallback": "at-icons:pointer",
	});
}

export default Component;
