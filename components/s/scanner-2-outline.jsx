import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj827-b1b.css';
import '../../css/g/grci_abjh.css';
import '../../css/r/r__xer__w.css';
import '../../css/j/jsqrbltyf.css';
import '../../css/e/e95dnts1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj827-b1b"/><path class="grci_abjh"/><path class="r__xer__w"/><path class="jsqrbltyf"/><path class="e95dnts1f"/>`,
		"fallback": "solar:scanner-2-outline",
	});
}

export default Component;
