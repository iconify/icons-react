import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gax-3p3_e.css';
import '../../css/c/cz41hf7gw.css';
import '../../css/d/ds0r57bdo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gax-3p3_e"/><path class="cz41hf7gw"/><path class="ds0r57bdo"/>`,
		"fallback": "devicon:sourceengine-wordmark",
	});
}

export default Component;
