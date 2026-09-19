import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbgmpqbct.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbgmpqbct"/>`,
		"fallback": "at-icons:radioactive-symbol",
	});
}

export default Component;
