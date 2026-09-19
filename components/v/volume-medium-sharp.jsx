import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwr0ifb7o.css';
import '../../css/a/ahflddu7k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwr0ifb7o"/><path class="ahflddu7k"/>`,
		"fallback": "ion:volume-medium-sharp",
	});
}

export default Component;
