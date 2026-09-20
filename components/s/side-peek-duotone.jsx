import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq_t1dwcz.css';
import '../../css/d/deu3b0kil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xq_t1dwcz"/><path class="deu3b0kil"/>`,
		"fallback": "stash:side-peek-duotone",
	});
}

export default Component;
