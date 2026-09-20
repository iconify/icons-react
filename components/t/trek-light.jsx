import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-65cw99i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-65cw99i"/>`,
		"fallback": "selfhst:trek-light",
	});
}

export default Component;
