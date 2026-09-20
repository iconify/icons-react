import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgl8q109f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgl8q109f"/>`,
		"fallback": "selfhst:reolink-light",
	});
}

export default Component;
