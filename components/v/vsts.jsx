import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlgswcb6n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlgswcb6n"/>`,
		"fallback": "file-icons:vsts",
	});
}

export default Component;
