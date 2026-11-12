import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muhbbxb6a.css';
import '../../css/v/vpv8vrdpm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muhbbxb6a"/><path class="vpv8vrdpm"/>`,
		"fallback": "selfhst:voidauth-light",
	});
}

export default Component;
