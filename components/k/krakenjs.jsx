import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3apx84gf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n3apx84gf"/>`,
		"fallback": "devicon:krakenjs",
	});
}

export default Component;
