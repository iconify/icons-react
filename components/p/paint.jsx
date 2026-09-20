import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pr5vhccbw.css';
import '../../css/s/sl7gii-2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pr5vhccbw"/><path class="sl7gii-2w"/></g>`,
		"fallback": "tabler:paint",
	});
}

export default Component;
