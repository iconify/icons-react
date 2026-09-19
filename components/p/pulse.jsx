import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1l_6cc3h.css';
import '../../css/o/oxijutbgj.css';

const viewBox = {"width":28,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1l_6cc3h"/><path class="oxijutbgj"/>`,
		"fallback": "fontisto:pulse",
	});
}

export default Component;
