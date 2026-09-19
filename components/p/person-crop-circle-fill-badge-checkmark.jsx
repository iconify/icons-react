import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cosm17b9v.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cosm17b9v"/>`,
		"fallback": "f7:person-crop-circle-fill-badge-checkmark",
	});
}

export default Component;
