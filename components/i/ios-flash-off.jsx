import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8t8phb8t.css';
import '../../css/k/k9nd7m2gk.css';
import '../../css/o/ol1wuwbkq.css';
import '../../css/c/ce-taw9ke.css';
import '../../css/l/l_iwwg5oc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8t8phb8t"/><path class="k9nd7m2gk"/><path class="ol1wuwbkq"/><path class="ce-taw9ke"/><path class="l_iwwg5oc"/>`,
		"fallback": "ion:ios-flash-off",
	});
}

export default Component;
