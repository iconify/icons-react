import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz_xepb1f.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz_xepb1f"/>`,
		"fallback": "el:network",
	});
}

export default Component;
