import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncv5qsbkx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncv5qsbkx"/>`,
		"fallback": "devicon-plain:jhipster-wordmark",
	});
}

export default Component;
