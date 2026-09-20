import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/c/c86jgvz3k.css';
import '../../css/l/ls0y62_4b.css';
import '../../css/d/d8asqki1b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="c86jgvz3k"/><path class="ls0y62_4b"/><path class="d8asqki1b"/></g>`,
		"fallback": "streamline-flex-color:japanese-alphabet",
	});
}

export default Component;
