import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rls1xqfjq.css';

const viewBox = {"width":356,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rls1xqfjq"/>`,
		"fallback": "file-icons:wdl",
	});
}

export default Component;
