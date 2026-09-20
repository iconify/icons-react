import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qya48qbrx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qya48qbrx"/>`,
		"fallback": "teenyicons:medium-solid",
	});
}

export default Component;
