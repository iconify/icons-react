import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng6blccig.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng6blccig"/>`,
		"fallback": "f7:person-crop-circle-badge-checkmark",
	});
}

export default Component;
