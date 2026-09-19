import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmnevccbt.css';
import '../../css/v/vzdhx2clg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmnevccbt"/><path class="vzdhx2clg"/>`,
		"fallback": "ion:ios-folder-open",
	});
}

export default Component;
