import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e590h6bnt.css';
import '../../css/u/uxhv_0b0t.css';
import '../../css/f/fcvv9ibrt.css';
import '../../css/n/n9pu9miqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e590h6bnt"/><path class="uxhv_0b0t"/><path class="fcvv9ibrt"/><path class="n9pu9miqg"/>`,
		"fallback": "withicons-bauhaus:trophy",
	});
}

export default Component;
