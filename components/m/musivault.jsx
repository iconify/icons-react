import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs5ke0bfd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs5ke0bfd"/>`,
		"fallback": "selfhst:musivault",
	});
}

export default Component;
