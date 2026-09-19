import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhu4i3sbi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhu4i3sbi"/>`,
		"fallback": "heroicons:rectangle-stack-16-solid",
	});
}

export default Component;
