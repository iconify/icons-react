import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vv0uoyjwr.css';
import '../../css/x/x9obmne9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vv0uoyjwr"/><path class="x9obmne9u"/></g>`,
		"fallback": "keyline-icons:list-collapse-sharp-duotone",
	});
}

export default Component;
