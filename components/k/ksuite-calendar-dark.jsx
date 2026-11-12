import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snixp0b7u.css';
import '../../css/b/b-02yv13v.css';
import '../../css/n/nvr0ynxmo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snixp0b7u"/><path class="b-02yv13v"/><path class="nvr0ynxmo"/>`,
		"fallback": "selfhst:ksuite-calendar-dark",
	});
}

export default Component;
