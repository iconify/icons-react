import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gulrh0bmy.css';
import '../../css/z/z-o2jl6ao.css';
import '../../css/r/rg3jykb4s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gulrh0bmy"/><path class="z-o2jl6ao"/><path class="rg3jykb4s"/>`,
		"fallback": "selfhst:truenas-core",
	});
}

export default Component;
