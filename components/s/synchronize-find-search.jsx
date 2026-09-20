import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/r/rq9ai-bto.css';
import '../../css/a/anwdr2sxy.css';
import '../../css/f/f5_n5vbkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="rq9ai-bto"/><path class="anwdr2sxy"/><path class="f5_n5vbkc"/></g>`,
		"fallback": "streamline-cyber:synchronize-find-search",
	});
}

export default Component;
