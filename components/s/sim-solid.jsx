import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iywas_9tn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iywas_9tn"/>`,
		"fallback": "teenyicons:sim-solid",
	});
}

export default Component;
