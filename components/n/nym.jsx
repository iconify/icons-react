import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upd0nac5h.css';
import '../../css/z/zce1ctb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="upd0nac5h"/><path class="zce1ctb5n"/>`,
		"fallback": "token:nym",
	});
}

export default Component;
