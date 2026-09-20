import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7hstbmu.css';
import '../../css/w/w37t0vbtp.css';
import '../../css/k/k4z7zsbhp.css';
import '../../css/g/ghc6hfkvs.css';
import '../../css/v/vxe5h2bfe.css';
import '../../css/x/x2b3ry3np.css';
import '../../css/l/l-116bc-w.css';
import '../../css/s/s67udfohu.css';
import '../../css/t/tdhzq11dq.css';
import '../../css/p/p79qv_alr.css';
import '../../css/o/ofybwub2i.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az7hstbmu"/><path class="w37t0vbtp"/><circle class="k4z7zsbhp"/><path class="ghc6hfkvs"/><path class="vxe5h2bfe"/><path class="x2b3ry3np"/><path class="l-116bc-w"/><path class="s67udfohu"/><path class="tdhzq11dq"/><path class="p79qv_alr"/><path class="ofybwub2i"/>`,
		"fallback": "openmoji:nerd-face",
	});
}

export default Component;
