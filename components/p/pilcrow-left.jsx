import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc2o02nwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc2o02nwd"/>`,
		"fallback": "tabler:pilcrow-left",
	});
}

export default Component;
