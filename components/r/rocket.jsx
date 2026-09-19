import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzrofvbmd.css';
import '../../css/z/zdu6p8bvj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzrofvbmd"/><path class="zdu6p8bvj"/>`,
		"fallback": "carbon:rocket",
	});
}

export default Component;
