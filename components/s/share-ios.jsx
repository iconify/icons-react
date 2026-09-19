import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbs71wbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbs71wbyi"/>`,
		"fallback": "gridicons:share-ios",
	});
}

export default Component;
