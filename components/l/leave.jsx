import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v747uwb-p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v747uwb-p"/>`,
		"fallback": "pajamas:leave",
	});
}

export default Component;
