import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj69a5hdy.css';
import '../../css/o/ohpicmbmt.css';
import '../../css/m/mf9o9n5rb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gj69a5hdy"/><path class="ohpicmbmt"/><path class="mf9o9n5rb"/>`,
		"fallback": "solar:remote-controller-minimalistic-outline",
	});
}

export default Component;
