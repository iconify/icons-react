import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwf_b-maa.css';
import '../../css/i/iu0_yp7rx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwf_b-maa"/><path class="iu0_yp7rx"/>`,
		"fallback": "devicon:nuxt-wordmark",
	});
}

export default Component;
