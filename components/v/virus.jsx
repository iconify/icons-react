import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/w5o7g2ubn.css';
import '../../css/a/al70cwvoz.css';
import '../../css/t/thqxrhbdl.css';
import '../../css/x/xnuytgkwb.css';
import '../../css/m/m4gqnvbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="w5o7g2ubn"/><path class="al70cwvoz"/><path class="thqxrhbdl wm-shine"/><path class="xnuytgkwb"/><path class="m4gqnvbgu wm-deco"/></g>`,
		"fallback": "withicons-kawaii:virus",
	});
}

export default Component;
