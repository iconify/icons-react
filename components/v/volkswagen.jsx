import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duvaw7d9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duvaw7d9w"/>`,
		"fallback": "simple-icons:volkswagen",
	});
}

export default Component;
