import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amlzk90ad.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amlzk90ad"/>`,
		"fallback": "maki:religious-muslim-11",
	});
}

export default Component;
