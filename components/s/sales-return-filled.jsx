import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grwi4nbft.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="grwi4nbft"/>`,
		"fallback": "lsicon:sales-return-filled",
	});
}

export default Component;
