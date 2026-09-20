import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd54be7bh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd54be7bh"/>`,
		"fallback": "ri:rainy-fill",
	});
}

export default Component;
