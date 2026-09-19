import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb2gfqb4x.css';
import '../../css/h/hmk4n3ura.css';
import '../../css/u/uqb8_ebby.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb2gfqb4x"/><path class="hmk4n3ura"/><path class="uqb8_ebby"/>`,
		"fallback": "fxemoji:waxinggibbousmoon",
	});
}

export default Component;
