import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5my-u8du.css';
import '../../css/a/atca9c2ie.css';
import '../../css/t/tp4af3bvu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5my-u8du"/><path class="atca9c2ie"/><path class="tp4af3bvu"/>`,
		"fallback": "selfhst:proton-lumo-light",
	});
}

export default Component;
