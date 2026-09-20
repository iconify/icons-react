import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz0_h5o9w.css';
import '../../css/a/adkjrqbfe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz0_h5o9w"/><path class="adkjrqbfe"/>`,
		"fallback": "selfhst:reclaimerr",
	});
}

export default Component;
