import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vi60rucln.css';
import '../../css/y/ymmgvcc1u.css';
import '../../css/z/z0_k-abss.css';
import '../../css/s/sj48eo8qr.css';
import '../../css/j/jm-o6kx0w.css';
import '../../css/l/lommftbon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vi60rucln wm-deco"/><path class="wm-deco ymmgvcc1u"/><path class="wm-deco z0_k-abss"/><path class="sj48eo8qr wm-k"/><path class="jm-o6kx0w wm-a"/><path class="lommftbon wm-k"/></g>`,
		"fallback": "withicons:pencil-blueprint",
	});
}

export default Component;
