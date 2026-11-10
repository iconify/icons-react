import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/svixe4bxv.css';
import '../../css/r/rgw7_28-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="svixe4bxv"/><path class="rgw7_28-x"/></g>`,
		"fallback": "lucide:square-arrow-right-enter",
	});
}

export default Component;
