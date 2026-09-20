import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wozpvq2zu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wozpvq2zu"/>`,
		"fallback": "pinhead:motorboat-under-list-beside-checkmark",
	});
}

export default Component;
