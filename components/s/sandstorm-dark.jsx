import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3qaxac_f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3qaxac_f"/>`,
		"fallback": "selfhst:sandstorm-dark",
	});
}

export default Component;
