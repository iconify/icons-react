import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6wexobdx.css';
import '../../css/o/o6xgc5beu.css';
import '../../css/y/ytjzqkm7e.css';
import '../../css/n/n237x3tme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6wexobdx"/><path class="o6xgc5beu"/><path class="ytjzqkm7e"/><path class="n237x3tme"/>`,
		"fallback": "solar:table-cells-split-bold",
	});
}

export default Component;
