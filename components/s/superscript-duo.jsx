import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jeo1kfb-t.css';
import '../../css/c/ccsoahs3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jeo1kfb-t"/><path class="ccsoahs3k wm-a"/></g>`,
		"fallback": "withicons:superscript-duo",
	});
}

export default Component;
