import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/v8hgvi38z.css';
import '../../css/z/zvwj1nbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="v8hgvi38z"/><path class="zvwj1nbbq"/></g>`,
		"fallback": "keyline-icons:panel-bottom-sharp-duotone",
	});
}

export default Component;
