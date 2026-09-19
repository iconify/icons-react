import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq5prsbjp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq5prsbjp"/>`,
		"fallback": "bi:shield-slash",
	});
}

export default Component;
