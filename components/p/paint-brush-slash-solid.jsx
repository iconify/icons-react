import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_dzrn5tn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p_dzrn5tn"/>`,
		"fallback": "sidekickicons:paint-brush-slash-solid",
	});
}

export default Component;
