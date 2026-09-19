import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6ysjn_ml.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6ysjn_ml"/>`,
		"fallback": "fluent-mdl2:pro-hockey",
	});
}

export default Component;
