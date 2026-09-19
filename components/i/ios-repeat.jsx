import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvc87pa5f.css';
import '../../css/o/os561700d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvc87pa5f"/><path class="os561700d"/>`,
		"fallback": "ion:ios-repeat",
	});
}

export default Component;
