import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gciqwy85p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gciqwy85p"/>`,
		"fallback": "devicon-plain:keycloak",
	});
}

export default Component;
