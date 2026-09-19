import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/c/cgb1b_ctt.css';
import '../../css/p/p8ik12bcj.css';
import '../../css/i/ib3dwix3e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="cgb1b_ctt"/><path class="p8ik12bcj"/><path class="ib3dwix3e"/></g>`,
		"fallback": "icon-park:symmetry",
	});
}

export default Component;
