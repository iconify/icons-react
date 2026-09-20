import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d01g2lbqs.css';
import '../../css/i/ijt9r4b8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d01g2lbqs"/><path class="ijt9r4b8h"/>`,
		"fallback": "stash:search-split-light",
	});
}

export default Component;
