import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vi_yw_71l.css';
import '../../css/r/r4-5n3bhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vi_yw_71l"/><path class="r4-5n3bhs"/></g>`,
		"fallback": "tabler:route-alt-left",
	});
}

export default Component;
