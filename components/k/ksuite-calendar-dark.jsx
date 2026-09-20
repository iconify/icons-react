import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj8dkmkmu.css';
import '../../css/m/mvmn2eb4z.css';
import '../../css/n/nvr0ynxmo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj8dkmkmu"/><path class="mvmn2eb4z"/><path class="nvr0ynxmo"/>`,
		"fallback": "selfhst:ksuite-calendar-dark",
	});
}

export default Component;
