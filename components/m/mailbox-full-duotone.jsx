import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsur1obse.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tr4-p2bbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGurOpSbYq" class="dsur1obse"/></defs><use href="#SVGurOpSbYq" clip-rule="evenodd" class="d2kvgvbvc"/><path class="tr4-p2bbz"/><use href="#SVGurOpSbYq"/>`,
		"fallback": "stash:mailbox-full-duotone",
	});
}

export default Component;
