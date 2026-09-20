import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lwyw3okfs.css';
import '../../css/k/kalv0rbvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lwyw3okfs"/><path clip-rule="evenodd" class="kalv0rbvz"/></g>`,
		"fallback": "streamline-sharp-color:medical-search-diagnosis-flat",
	});
}

export default Component;
