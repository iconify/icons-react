import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jxnbaxbfu.css';
import '../../css/o/o49irb5lr.css';
import '../../css/g/gppdg4b3p.css';
import '../../css/c/crl7rob6r.css';
import '../../css/x/xwwxupb1q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jxnbaxbfu"/><path class="o49irb5lr"/><path class="gppdg4b3p"/><path class="crl7rob6r"/><path class="xwwxupb1q"/></g>`,
		"fallback": "fluent-emoji-flat:thread",
	});
}

export default Component;
