import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs3hx5zyq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zs3hx5zyq"/>`,
		"fallback": "sidekickicons:mask-16-solid",
	});
}

export default Component;
