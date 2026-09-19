import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8i4wsn-f.css';
import '../../css/g/gucvo3bak.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8i4wsn-f"/><path class="gucvo3bak"/>`,
		"fallback": "famicons:megaphone-outline",
	});
}

export default Component;
