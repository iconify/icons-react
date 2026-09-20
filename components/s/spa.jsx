import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5muktbfu.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5muktbfu"/>`,
		"fallback": "temaki:spa",
	});
}

export default Component;
