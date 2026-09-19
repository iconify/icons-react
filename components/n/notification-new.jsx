import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p79y4pbes.css';
import '../../css/l/l7avsacre.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p79y4pbes"/><circle class="l7avsacre"/>`,
		"fallback": "carbon:notification-new",
	});
}

export default Component;
