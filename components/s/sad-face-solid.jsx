import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkms7-b5g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gkms7-b5g"/>`,
		"fallback": "streamline-plump:sad-face-solid",
	});
}

export default Component;
