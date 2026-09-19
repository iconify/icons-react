import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8a0o-eya.css';
import '../../css/b/bde2b1vcx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8a0o-eya"/><path class="bde2b1vcx"/>`,
		"fallback": "carbon:virtual-private-cloud",
	});
}

export default Component;
