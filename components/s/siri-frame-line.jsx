import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjr9i_a7v.css';
import '../../css/p/pz9kr7bph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="jjr9i_a7v"/><path class="pz9kr7bph"/>`,
		"fallback": "mingcute:siri-frame-line",
	});
}

export default Component;
