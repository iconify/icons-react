import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9orhbcrs.css';
import '../../css/b/bye6f4hdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9orhbcrs"/><path class="bye6f4hdc"/>`,
		"fallback": "tdesign:map-safety-filled",
	});
}

export default Component;
