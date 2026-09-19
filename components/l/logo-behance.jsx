import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpdyx2oqs.css';
import '../../css/v/v466cfl0k.css';
import '../../css/x/xutg7tbyr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpdyx2oqs"/><path class="v466cfl0k"/><path class="xutg7tbyr"/>`,
		"fallback": "famicons:logo-behance",
	});
}

export default Component;
