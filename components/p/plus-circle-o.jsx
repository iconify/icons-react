import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg-yorbec.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg-yorbec"/>`,
		"fallback": "uiw:plus-circle-o",
	});
}

export default Component;
