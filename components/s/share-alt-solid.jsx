import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a41sdccux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a41sdccux"/>`,
		"fallback": "pixel:share-alt-solid",
	});
}

export default Component;
