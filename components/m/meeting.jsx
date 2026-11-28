import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glmcx89ml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glmcx89ml"/>`,
		"fallback": "noviair:meeting",
	});
}

export default Component;
