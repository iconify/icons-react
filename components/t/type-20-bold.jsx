import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c25xksbst.css';
import '../../css/b/b8n6dn1gc.css';
import '../../css/z/zbsbes5cq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c25xksbst"/><path class="b8n6dn1gc"/><path class="zbsbes5cq"/>`,
		"fallback": "energy-icons:type-20-bold",
	});
}

export default Component;
