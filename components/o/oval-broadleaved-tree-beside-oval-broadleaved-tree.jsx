import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp8gz9b7o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp8gz9b7o"/>`,
		"fallback": "pinhead:oval-broadleaved-tree-beside-oval-broadleaved-tree",
	});
}

export default Component;
