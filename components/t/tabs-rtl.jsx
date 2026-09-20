import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw461ib2w.css';
import '../../css/p/p5et4nbmo.css';
import '../../css/b/buwuemb7q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw461ib2w"/><circle class="p5et4nbmo"/><circle class="buwuemb7q"/>`,
		"fallback": "ooui:tabs-rtl",
	});
}

export default Component;
