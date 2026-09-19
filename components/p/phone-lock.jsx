import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vlhp-dbzf.css';
import '../../css/l/lw413bpzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vlhp-dbzf"/><path class="lw413bpzb"/></g>`,
		"fallback": "hugeicons:phone-lock",
	});
}

export default Component;
