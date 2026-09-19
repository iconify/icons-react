import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/arqg8jj_b.css';
import '../../css/o/oj4jiktks.css';
import '../../css/v/vmlcflbmj.css';
import '../../css/i/icrhsbbol.css';
import '../../css/k/ktkwnfb1k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="arqg8jj_b"/><path class="oj4jiktks"/><path class="vmlcflbmj"/><path class="icrhsbbol"/><path class="ktkwnfb1k"/></g>`,
		"fallback": "fluent-emoji-flat:kite",
	});
}

export default Component;
