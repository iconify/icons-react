import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/brlrehbzr.css';
import '../../css/f/fpc2q4b0b.css';
import '../../css/n/nlp-xebet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="brlrehbzr"/><path class="fpc2q4b0b"/><path class="nlp-xebet"/></g>`,
		"fallback": "streamline-cyber:synchronize-loop",
	});
}

export default Component;
