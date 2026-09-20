import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjpa3xbbb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vjpa3xbbb"/>`,
		"fallback": "teenyicons:svelte-solid",
	});
}

export default Component;
