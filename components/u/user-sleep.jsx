import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj4d1uf6r.css';
import '../../css/i/iscnj5bzx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj4d1uf6r"/><path class="iscnj5bzx"/>`,
		"fallback": "streamline-pixel:user-sleep",
	});
}

export default Component;
