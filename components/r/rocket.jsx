import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rv_bocbdi.css';
import '../../css/r/r0ojnfb5c.css';
import '../../css/i/ijzh8qnmh.css';
import '../../css/g/gqtuzvt_k.css';
import '../../css/e/ebguo_bts.css';
import '../../css/u/ug-be2axd.css';
import '../../css/t/t_-ej3bws.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rv_bocbdi"/><path class="r0ojnfb5c"/><path class="ijzh8qnmh"/><path class="gqtuzvt_k"/><path class="ebguo_bts"/><path class="ug-be2axd"/><path class="t_-ej3bws"/></g>`,
		"fallback": "fluent-emoji-flat:rocket",
	});
}

export default Component;
