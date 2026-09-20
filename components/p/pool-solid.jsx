import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea-644bal.css';
import '../../css/i/iwz5x-bvn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ea-644bal"/><path class="iwz5x-bvn"/>`,
		"fallback": "teenyicons:pool-solid",
	});
}

export default Component;
