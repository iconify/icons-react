import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/o/owy87kbwh.css';
import '../../css/s/sm8vdq4qm.css';
import '../../css/q/q9bkx5b6j.css';
import '../../css/a/a0a4fku7h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="owy87kbwh"/><path class="sm8vdq4qm"/><path class="q9bkx5b6j"/><path class="a0a4fku7h"/></g>`,
		"fallback": "circle-flags:ps",
	});
}

export default Component;
