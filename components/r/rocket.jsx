import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb0cjbbuh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb0cjbbuh"/>`,
		"fallback": "icomoon-free:rocket",
	});
}

export default Component;
