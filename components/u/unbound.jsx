import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqw05nt-o.css';
import '../../css/c/cqbk9ybmn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqw05nt-o"/><path class="cqbk9ybmn"/>`,
		"fallback": "selfhst:unbound",
	});
}

export default Component;
