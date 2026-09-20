import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odmh5oz-e.css';
import '../../css/x/x0w8p7-8h.css';
import '../../css/k/kpkdmqbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="odmh5oz-e"/><path class="x0w8p7-8h"/><path class="kpkdmqbmc"/>`,
		"fallback": "token:klima",
	});
}

export default Component;
