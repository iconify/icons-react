import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/a8f231k-x.css';
import '../../css/a/ahhqo1b4s.css';
import '../../css/e/ellalvbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="a8f231k-x"/><path class="ahhqo1b4s"/><path class="ellalvbgp"/></g>`,
		"fallback": "keyline-icons:link-2-off-sharp-duotone",
	});
}

export default Component;
