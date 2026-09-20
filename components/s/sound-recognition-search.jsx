import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdxeyrj_v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdxeyrj_v"/>`,
		"fallback": "streamline-flex:sound-recognition-search",
	});
}

export default Component;
