import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zci8y-jwp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zci8y-jwp"/>`,
		"fallback": "temaki:statue",
	});
}

export default Component;
