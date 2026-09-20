import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jwsgkxbib.css';
import '../../css/n/nalw8vbji.css';
import '../../css/j/jnrwwtxlf.css';
import '../../css/t/tqza-jbmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jwsgkxbib"/><path clip-rule="evenodd" class="nalw8vbji"/><path class="jnrwwtxlf"/><path clip-rule="evenodd" class="tqza-jbmx"/></g>`,
		"fallback": "reicon:mailbox-filled",
	});
}

export default Component;
