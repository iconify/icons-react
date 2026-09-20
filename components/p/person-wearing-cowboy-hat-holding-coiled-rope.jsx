import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok1z80fpp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok1z80fpp"/>`,
		"fallback": "pinhead:person-wearing-cowboy-hat-holding-coiled-rope",
	});
}

export default Component;
