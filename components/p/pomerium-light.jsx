import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inemvmb9i.css';
import '../../css/u/u1l779tda.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inemvmb9i"/><path class="u1l779tda"/>`,
		"fallback": "selfhst:pomerium-light",
	});
}

export default Component;
