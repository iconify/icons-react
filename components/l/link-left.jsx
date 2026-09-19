import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aeu03xbsn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aeu03xbsn"/>`,
		"fallback": "icon-park-outline:link-left",
	});
}

export default Component;
