import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/and361xiy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="and361xiy"/>`,
		"fallback": "teenyicons:sort-up-solid",
	});
}

export default Component;
