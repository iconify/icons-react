import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f36-y9b7o.css';
import '../../css/h/hhklj-ekd.css';
import '../../css/j/jq1ocn84k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f36-y9b7o"/><path class="hhklj-ekd"/><path class="jq1ocn84k"/></g>`,
		"fallback": "lucide-extended:toilet-duotone",
	});
}

export default Component;
