import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csj5fll6c.css';
import '../../css/k/ka_0zbc7f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csj5fll6c"/><path class="ka_0zbc7f"/>`,
		"fallback": "selfhst:wardrowbe-dark",
	});
}

export default Component;
