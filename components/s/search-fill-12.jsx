import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6m002bvn.css';
import '../../css/s/sgxi3fe_a.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="f6m002bvn"/><path class="sgxi3fe_a"/>`,
		"fallback": "garden:search-fill-12",
	});
}

export default Component;
