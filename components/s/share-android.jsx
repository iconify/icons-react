import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld-pkh_3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld-pkh_3j"/>`,
		"fallback": "griddy-icons:share-android",
	});
}

export default Component;
