import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9-uq4bby.css';
import '../../css/t/txip2qdzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9-uq4bby"/><path class="txip2qdzh"/>`,
		"fallback": "streamline-ultimate:server-share-bold",
	});
}

export default Component;
