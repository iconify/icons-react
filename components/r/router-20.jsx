import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx2n-7xqn.css';
import '../../css/b/bpbl5vkki.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx2n-7xqn"/><path class="bpbl5vkki"/>`,
		"fallback": "energy-icons:router-20",
	});
}

export default Component;
