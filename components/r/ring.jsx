import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/s2mi2ccgn.css';
import '../../css/b/btcjiy4_l.css';
import '../../css/i/ii7tu4bnf.css';
import '../../css/x/xqrnbvbfy.css';
import '../../css/j/j2-okfb5g.css';
import '../../css/q/qq3-kxbgm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="s2mi2ccgn"/><path class="btcjiy4_l"/><path class="ii7tu4bnf"/><path class="xqrnbvbfy"/><path class="j2-okfb5g"/><path class="qq3-kxbgm"/></g>`,
		"fallback": "icon-park:ring",
	});
}

export default Component;
