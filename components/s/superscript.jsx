import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jeo1kfb-t.css';
import '../../css/c/ccsoahs3k.css';
import '../../css/u/u7mhlfb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="jeo1kfb-t wm-k"/><path class="ccsoahs3k wm-a"/><path class="u7mhlfb0o wm-deco"/></g>`,
		"fallback": "withicons-kawaii:superscript",
	});
}

export default Component;
