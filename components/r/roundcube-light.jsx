import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmbgd7baw.css';
import '../../css/k/kczhvw7ao.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmbgd7baw"/><path class="kczhvw7ao"/>`,
		"fallback": "selfhst:roundcube-light",
	});
}

export default Component;
