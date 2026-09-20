import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw_3-n8mp.css';
import '../../css/x/xu9n3sboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw_3-n8mp"/><path class="xu9n3sboz"/>`,
		"fallback": "tdesign:user-talk-filled",
	});
}

export default Component;
