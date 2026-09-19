import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-hm_lb3s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-hm_lb3s"/>`,
		"fallback": "dinkie-icons:sina-weibo",
	});
}

export default Component;
