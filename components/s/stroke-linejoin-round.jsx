import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cwo2-pbuc.css';
import '../../css/m/mt-o-cafs.css';
import '../../css/u/uwj74xp4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cwo2-pbuc"/><path class="mt-o-cafs"/><path class="uwj74xp4r"/></g>`,
		"fallback": "andrsrxn:stroke-linejoin-round",
	});
}

export default Component;
