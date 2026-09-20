import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5t43yc4z.css';
import '../../css/u/ucpf2webs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v5t43yc4z"/><path clip-rule="evenodd" class="ucpf2webs"/>`,
		"fallback": "selfhst:nextcloud-talk-light",
	});
}

export default Component;
