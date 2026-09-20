import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcri59tzd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcri59tzd"/>`,
		"fallback": "teenyicons:share-outline",
	});
}

export default Component;
