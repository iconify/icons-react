import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zc_rhabrv.css';
import '../../css/g/gqxs2mwst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zc_rhabrv"/><path class="gqxs2mwst"/></g>`,
		"fallback": "tabler:play-bugs",
	});
}

export default Component;
