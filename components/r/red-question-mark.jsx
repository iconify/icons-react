import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cof83vbbe.css';
import '../../css/i/infp_-iqz.css';
import '../../css/t/tkcb4abzj.css';
import '../../css/p/pd0d71b8i.css';
import '../../css/i/ido_hw-bp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cof83vbbe"><path class="infp_-iqz"/><circle class="tkcb4abzj"/></g><circle class="pd0d71b8i"/><path class="ido_hw-bp"/>`,
		"fallback": "openmoji:red-question-mark",
	});
}

export default Component;
