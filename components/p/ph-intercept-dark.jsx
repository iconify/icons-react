import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgcdo-zfb.css';
import '../../css/u/ufos4gbmw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgcdo-zfb"/><path class="ufos4gbmw"/>`,
		"fallback": "selfhst:ph-intercept-dark",
	});
}

export default Component;
