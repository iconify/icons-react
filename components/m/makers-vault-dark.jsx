import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjlyrzb2a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjlyrzb2a"/>`,
		"fallback": "selfhst:makers-vault-dark",
	});
}

export default Component;
