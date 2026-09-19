import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byuykdq7y.css';

const viewBox = {"width":454,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byuykdq7y"/>`,
		"fallback": "file-icons:ring",
	});
}

export default Component;
