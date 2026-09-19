import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg9fendhi.css';
import '../../css/p/pzsltxbqg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg9fendhi"/><path class="pzsltxbqg"/>`,
		"fallback": "ion:wallet",
	});
}

export default Component;
