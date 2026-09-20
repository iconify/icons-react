import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5xa68byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5xa68byt"/>`,
		"fallback": "streamline-sharp:store-2",
	});
}

export default Component;
