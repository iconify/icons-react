import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lhlre9baf.css';
import '../../css/d/dhzjg104r.css';
import '../../css/y/yz7331f4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="lhlre9baf"/><circle class="dhzjg104r"/><path class="yz7331f4s"/></g>`,
		"fallback": "iconamoon:mode-light-duotone",
	});
}

export default Component;
