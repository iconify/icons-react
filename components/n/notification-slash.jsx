import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or6rs0b6f.css';
import '../../css/z/z7sl-6blv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or6rs0b6f"/><path class="z7sl-6blv"/>`,
		"fallback": "boxicons:notification-slash",
	});
}

export default Component;
