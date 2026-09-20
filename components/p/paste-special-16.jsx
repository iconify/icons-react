import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sajnihbkl.css';
import '../../css/i/i7cc-hrjp.css';
import '../../css/r/rwjvbub1x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sajnihbkl"/><path clip-rule="evenodd" class="i7cc-hrjp"/><path class="rwjvbub1x"/>`,
		"fallback": "qlementine-icons:paste-special-16",
	});
}

export default Component;
