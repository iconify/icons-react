import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmb49sbbn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmb49sbbn"/>`,
		"fallback": "bi:marker-tip",
	});
}

export default Component;
