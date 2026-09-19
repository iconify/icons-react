import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il7qh1uhq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il7qh1uhq"/>`,
		"fallback": "bi:sign-no-parking",
	});
}

export default Component;
