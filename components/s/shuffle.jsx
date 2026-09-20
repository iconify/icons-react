import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zz8xutbrl.css';
import '../../css/n/n49e6g5-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zz8xutbrl"/><path class="n49e6g5-w"/></g>`,
		"fallback": "lucide:shuffle",
	});
}

export default Component;
