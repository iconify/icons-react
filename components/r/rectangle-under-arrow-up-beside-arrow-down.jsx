import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k81q3hz4j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k81q3hz4j"/>`,
		"fallback": "pinhead:rectangle-under-arrow-up-beside-arrow-down",
	});
}

export default Component;
