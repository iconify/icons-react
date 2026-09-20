import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/sdf9kvuav.css';
import '../../css/r/ranku4ptu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="sdf9kvuav"/><path class="ranku4ptu"/></g>`,
		"fallback": "keyline-icons:share-sharp-two-tone",
	});
}

export default Component;
