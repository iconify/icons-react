import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/run4fcbjt.css';
import '../../css/y/y_7gziaml.css';
import '../../css/f/fzp0gcbsh.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="run4fcbjt"/><path class="y_7gziaml"/><path class="fzp0gcbsh"/>`,
		"fallback": "foundation:page-multiple",
	});
}

export default Component;
