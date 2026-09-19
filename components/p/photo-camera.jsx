import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muz8hiwra.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="muz8hiwra"/>`,
		"fallback": "at-icons:photo-camera",
	});
}

export default Component;
