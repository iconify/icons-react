import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0zwnb2np.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0zwnb2np"/>`,
		"fallback": "bi:usb-drive",
	});
}

export default Component;
