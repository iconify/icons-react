import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo9mpblsn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo9mpblsn"/>`,
		"fallback": "file-icons:sentry",
	});
}

export default Component;
