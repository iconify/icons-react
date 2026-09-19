import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9rpk5b8h.css';
import '../../css/y/yt58xlb7j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9rpk5b8h"/><path class="yt58xlb7j"/>`,
		"fallback": "ion:logo-apple",
	});
}

export default Component;
