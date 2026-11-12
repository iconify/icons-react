import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt_7jqbdu.css';
import '../../css/b/b96vt-g1e.css';
import '../../css/l/l78zzhbem.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt_7jqbdu"/><path class="b96vt-g1e"/><path class="l78zzhbem"/>`,
		"fallback": "selfhst:leafwiki-light",
	});
}

export default Component;
