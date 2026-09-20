import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm7b_gbkd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sm7b_gbkd"/>`,
		"fallback": "teenyicons:stop-circle-solid",
	});
}

export default Component;
