import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdv0l904k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jdv0l904k"/>`,
		"fallback": "pajamas:sidebar",
	});
}

export default Component;
