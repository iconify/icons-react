import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv2h5uisl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv2h5uisl"/>`,
		"fallback": "meteor-icons:leaf",
	});
}

export default Component;
