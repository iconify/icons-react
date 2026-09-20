import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uymgdabjo.css';
import '../../css/j/jpf_kcbts.css';
import '../../css/r/r5798bbfe.css';
import '../../css/f/fsip9nbyp.css';
import '../../css/o/op9bcu85a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uymgdabjo"/><path class="jpf_kcbts"/><path class="r5798bbfe"/><path class="fsip9nbyp"/><path class="op9bcu85a"/>`,
		"fallback": "streamline-emojis:raised-hand-1",
	});
}

export default Component;
