import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxnfvbayz.css';
import '../../css/h/h46e1ybha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxnfvbayz"/><path class="h46e1ybha"/>`,
		"fallback": "lineicons:watch-beat-1",
	});
}

export default Component;
