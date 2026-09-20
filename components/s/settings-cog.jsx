import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hq669gfbz.css';
import '../../css/c/cbddgccmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hq669gfbz"/><path class="cbddgccmr"/></g>`,
		"fallback": "tabler:settings-cog",
	});
}

export default Component;
