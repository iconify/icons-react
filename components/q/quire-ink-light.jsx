import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grb9lfb6x.css';
import '../../css/n/n3dlx8buc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grb9lfb6x"/><path class="n3dlx8buc"/>`,
		"fallback": "selfhst:quire-ink-light",
	});
}

export default Component;
