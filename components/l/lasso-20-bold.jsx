import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egr9hrb-r.css';
import '../../css/z/zhxx2z6mr.css';
import '../../css/i/iw63emb2i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egr9hrb-r"/><path class="zhxx2z6mr"/><path class="iw63emb2i"/>`,
		"fallback": "energy-icons:lasso-20-bold",
	});
}

export default Component;
