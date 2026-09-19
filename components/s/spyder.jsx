import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dutclc24h.css';
import '../../css/x/x5f34xbxd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dutclc24h"/><path class="x5f34xbxd"/>`,
		"fallback": "devicon:spyder",
	});
}

export default Component;
