import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbpbqzb9j.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbpbqzb9j"/>`,
		"fallback": "lineicons:unlink-2-angular-eft",
	});
}

export default Component;
