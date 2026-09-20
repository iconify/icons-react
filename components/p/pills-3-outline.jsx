import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/favctopsu.css';
import '../../css/h/hteq0sbqz.css';
import '../../css/k/kdkfreb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="favctopsu"/><path class="hteq0sbqz"/><path class="kdkfreb8m"/></g>`,
		"fallback": "solar:pills-3-outline",
	});
}

export default Component;
