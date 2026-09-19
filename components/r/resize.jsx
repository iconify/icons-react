import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzny-wb1o.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzny-wb1o"/>`,
		"fallback": "whh:resize",
	});
}

export default Component;
