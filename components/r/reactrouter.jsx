import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dghn0kt5a.css';
import '../../css/i/ioxby4bxt.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dghn0kt5a"/><path class="ioxby4bxt"/>`,
		"fallback": "devicon:reactrouter",
	});
}

export default Component;
