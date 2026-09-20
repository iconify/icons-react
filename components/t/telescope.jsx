import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn8m7vbib.css';
import '../../css/o/o9_qvlbwy.css';
import '../../css/c/cwmeeibwc.css';
import '../../css/c/c1mz_9byp.css';
import '../../css/p/pv9xaozvi.css';
import '../../css/p/pinmuxbnx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn8m7vbib"/><path class="o9_qvlbwy"/><path class="cwmeeibwc"/><path class="c1mz_9byp"/><circle class="pv9xaozvi"/><path class="pinmuxbnx"/>`,
		"fallback": "openmoji:telescope",
	});
}

export default Component;
