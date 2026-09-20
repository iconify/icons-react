import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juh0qibpl.css';
import '../../css/q/qwbenrq8i.css';
import '../../css/w/wnm3xrb7a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juh0qibpl"/><path class="qwbenrq8i"/><path class="wnm3xrb7a"/>`,
		"fallback": "ooui:suggested-investigations",
	});
}

export default Component;
