import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xli1voboc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xli1voboc"/>`,
		"fallback": "streamline-plump:user-face-id-mask-remix",
	});
}

export default Component;
