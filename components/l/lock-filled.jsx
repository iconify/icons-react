import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugkyat6-v.css';
import '../../css/a/a1iy-fbzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ugkyat6-v"/><path clip-rule="evenodd" class="a1iy-fbzk"/>`,
		"fallback": "bitcoin-icons:lock-filled",
	});
}

export default Component;
