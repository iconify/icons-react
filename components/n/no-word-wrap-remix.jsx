import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be_2xzbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="be_2xzbji"/>`,
		"fallback": "streamline-sharp:no-word-wrap-remix",
	});
}

export default Component;
