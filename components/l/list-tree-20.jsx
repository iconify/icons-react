import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acadc4zqf.css';
import '../../css/k/k9wblp0cn.css';
import '../../css/p/p4jr7vbhr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acadc4zqf"/><path class="k9wblp0cn"/><path class="p4jr7vbhr"/>`,
		"fallback": "energy-icons:list-tree-20",
	});
}

export default Component;
