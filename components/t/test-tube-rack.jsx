import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl11e_b6a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl11e_b6a"/>`,
		"fallback": "game-icons:test-tube-rack",
	});
}

export default Component;
