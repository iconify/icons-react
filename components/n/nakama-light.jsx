import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4nb21bnx.css';
import '../../css/e/eswzabcqv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4nb21bnx"/><path class="eswzabcqv"/>`,
		"fallback": "selfhst:nakama-light",
	});
}

export default Component;
