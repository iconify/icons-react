import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cx31yrgnx.css';
import '../../css/b/b1pqtnimy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cx31yrgnx"/><path class="b1pqtnimy"/></g>`,
		"fallback": "streamline:programming-script-file-code-2-code-programming-terminal-shell-file-line-command-files",
	});
}

export default Component;
