import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8p62x6vn.css';
import '../../css/s/stbfr1b_g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8p62x6vn"/><path class="stbfr1b_g"/>`,
		"fallback": "carbon:test-tool",
	});
}

export default Component;
