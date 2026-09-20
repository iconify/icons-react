import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kyox24bbn.css';
import '../../css/j/ja2qzrzib.css';
import '../../css/w/wv-8vsbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kyox24bbn"/><path class="ja2qzrzib"/><path clip-rule="evenodd" class="wv-8vsbun"/></g>`,
		"fallback": "solar:text-bold-square-bold",
	});
}

export default Component;
