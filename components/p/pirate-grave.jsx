import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz__e2bec.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz__e2bec"/>`,
		"fallback": "game-icons:pirate-grave",
	});
}

export default Component;
