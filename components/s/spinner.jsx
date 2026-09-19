import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr92irb4b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr92irb4b"/>`,
		"fallback": "icomoon-free:spinner",
	});
}

export default Component;
