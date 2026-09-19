import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ebsul_bxa.css';
import '../../css/b/bqarpxbaq.css';
import '../../css/c/cc2hh2ugt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ebsul_bxa"/><path class="bqarpxbaq"/><path class="cc2hh2ugt"/></g>`,
		"fallback": "glyphs:wallet-duo",
	});
}

export default Component;
