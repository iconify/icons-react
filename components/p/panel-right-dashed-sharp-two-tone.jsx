import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/nl6i3qb2f.css';
import '../../css/x/xsa8rjksl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="nl6i3qb2f"/><path class="xsa8rjksl"/></g>`,
		"fallback": "keyline-icons:panel-right-dashed-sharp-two-tone",
	});
}

export default Component;
