import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bk97g25de.css';
import '../../css/z/zwj-p0bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bk97g25de"/><path class="zwj-p0bpc"/></g>`,
		"fallback": "coolicons:panel-left-close-duocolor-round",
	});
}

export default Component;
