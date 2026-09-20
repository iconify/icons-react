import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfg7thmyp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfg7thmyp"/>`,
		"fallback": "streamline-block:nature-plant",
	});
}

export default Component;
