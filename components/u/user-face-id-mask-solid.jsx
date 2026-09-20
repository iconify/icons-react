import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnmxq6bmd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dnmxq6bmd"/>`,
		"fallback": "streamline-plump:user-face-id-mask-solid",
	});
}

export default Component;
