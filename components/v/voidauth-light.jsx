import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onvqw7b7g.css';
import '../../css/l/l5bk2kpqe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onvqw7b7g"/><path class="l5bk2kpqe"/>`,
		"fallback": "selfhst:voidauth-light",
	});
}

export default Component;
