import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu0j24bnb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu0j24bnb"/>`,
		"fallback": "pinhead:person-riding-bicycle-up-uneven-slope",
	});
}

export default Component;
