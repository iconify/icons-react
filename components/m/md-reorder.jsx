import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_4zw6myr.css';
import '../../css/d/dqmrp9wad.css';
import '../../css/k/ksly09b8o.css';
import '../../css/b/bl5cpf6bt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_4zw6myr"/><path class="dqmrp9wad"/><path class="ksly09b8o"/><path class="bl5cpf6bt"/>`,
		"fallback": "ion:md-reorder",
	});
}

export default Component;
