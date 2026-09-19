import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvbgy_bui.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvbgy_bui"/>`,
		"fallback": "icon-park-solid:share-two",
	});
}

export default Component;
