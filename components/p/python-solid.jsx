import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_c3lsbki.css';
import '../../css/g/gs5s95byq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_c3lsbki"/><path class="gs5s95byq"/>`,
		"fallback": "teenyicons:python-solid",
	});
}

export default Component;
