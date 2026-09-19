import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwaa-wbbg.css';
import '../../css/j/jfmxxebmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwaa-wbbg"/><path class="jfmxxebmr"/>`,
		"fallback": "boxicons:microphone",
	});
}

export default Component;
