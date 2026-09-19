import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txz6rnsnk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txz6rnsnk"/>`,
		"fallback": "devicon-plain:jamstack-wordmark",
	});
}

export default Component;
