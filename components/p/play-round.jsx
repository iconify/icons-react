import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8s66ibcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8s66ibcf"/>`,
		"fallback": "coolicons:play-round",
	});
}

export default Component;
