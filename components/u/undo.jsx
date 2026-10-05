import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/z8e1ez1_j.css';
import '../../css/j/jjuppljnf.css';
import '../../css/s/s7vwhobch.css';
import '../../css/k/kowq38-ht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="z8e1ez1_j"/><path class="jjuppljnf"/><path class="s7vwhobch"/><path class="kowq38-ht"/></g>`,
		"fallback": "matita:undo",
	});
}

export default Component;
