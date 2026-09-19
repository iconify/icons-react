import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_vkmgbub.css';
import '../../css/a/aezlh4b0q.css';
import '../../css/p/p6fyrlwrx.css';
import '../../css/g/gnvnf3b0u.css';
import '../../css/l/l2fzl2bmq.css';
import '../../css/a/at7h6sbnr.css';
import '../../css/q/qnp8_p3or.css';
import '../../css/o/o_f95nb3q.css';
import '../../css/f/f255pk9pp.css';
import '../../css/j/j027tub5x.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_vkmgbub"/><path class="aezlh4b0q"/><path class="p6fyrlwrx"/><path class="gnvnf3b0u"/><path class="l2fzl2bmq"/><path class="at7h6sbnr"/><path class="qnp8_p3or"/><path class="o_f95nb3q"/><path class="f255pk9pp"/><path class="j027tub5x"/>`,
		"fallback": "devicon:pytest-wordmark",
	});
}

export default Component;
