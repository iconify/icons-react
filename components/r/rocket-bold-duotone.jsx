import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym8wn7bnw.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/e/eub-owb9l.css';
import '../../css/k/kq-ytpe-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ym8wn7bnw"/><g class="xtpeb-edw"><path class="eub-owb9l"/><path class="kq-ytpe-e"/></g>`,
		"fallback": "solar:rocket-bold-duotone",
	});
}

export default Component;
