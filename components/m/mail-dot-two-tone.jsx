import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b2t_f_n2n.css';
import '../../css/l/lb4yrab6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b2t_f_n2n"/><path class="lb4yrab6d"/></g>`,
		"fallback": "keyline-icons:mail-dot-two-tone",
	});
}

export default Component;
