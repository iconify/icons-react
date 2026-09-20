import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmlt0ibsn.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmlt0ibsn"/>`,
		"fallback": "octicon:screen-normal",
	});
}

export default Component;
