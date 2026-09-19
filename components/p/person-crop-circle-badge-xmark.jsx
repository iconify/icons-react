import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnrhzrx5f.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnrhzrx5f"/>`,
		"fallback": "f7:person-crop-circle-badge-xmark",
	});
}

export default Component;
