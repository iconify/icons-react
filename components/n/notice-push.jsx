import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcfp9s-0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGt6KFdcQE" class="wcfp9s-0x"/></defs><use href="#SVGt6KFdcQE"/>`,
		"fallback": "fe:notice-push",
	});
}

export default Component;
