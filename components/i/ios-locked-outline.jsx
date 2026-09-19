import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fao0odb7l.css';
import '../../css/v/v-qvd4btd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fao0odb7l"/><path class="v-qvd4btd"/>`,
		"fallback": "ion:ios-locked-outline",
	});
}

export default Component;
