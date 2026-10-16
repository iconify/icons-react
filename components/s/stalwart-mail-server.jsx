import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtljxnn2y.css';
import '../../css/n/niojdpbxv.css';

const viewBox = {"width":481.62,"height":82.75,"left":99.5,"top":84.68};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtljxnn2y"/><path class="niojdpbxv"/>`,
		"fallback": "thesvg-color:stalwart-mail-server",
	});
}

export default Component;
