import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvhcjuz2f.css';
import '../../css/k/ka_fpy-jt.css';
import '../../css/b/bx0xhcozx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvhcjuz2f"/><path class="ka_fpy-jt"/><path class="bx0xhcozx"/>`,
		"fallback": "selfhst:nanoclaw-light",
	});
}

export default Component;
