import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajbt87aul.css';
import '../../css/b/bjh1ltbve.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajbt87aul"/><path class="bjh1ltbve"/>`,
		"fallback": "energy-icons:lockbox-20-bold",
	});
}

export default Component;
