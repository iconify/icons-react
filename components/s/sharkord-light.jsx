import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwfs0wj7w.css';
import '../../css/k/kqtmmib8a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwfs0wj7w"/><path class="kqtmmib8a"/>`,
		"fallback": "selfhst:sharkord-light",
	});
}

export default Component;
