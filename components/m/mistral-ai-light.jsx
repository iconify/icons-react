import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igse0ywyr.css';
import '../../css/f/fryw_qe2v.css';
import '../../css/o/oov8yuuut.css';
import '../../css/x/x8rt_pe9r.css';
import '../../css/v/v24tgxb9s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igse0ywyr"/><path class="fryw_qe2v"/><path class="oov8yuuut"/><path class="x8rt_pe9r"/><path class="v24tgxb9s"/>`,
		"fallback": "selfhst:mistral-ai-light",
	});
}

export default Component;
