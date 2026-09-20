import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9q3ovbku.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9q3ovbku"/>`,
		"fallback": "teenyicons:paintbucket-outline",
	});
}

export default Component;
