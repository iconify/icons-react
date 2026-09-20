import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oor-few0y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oor-few0y"/>`,
		"fallback": "selfhst:relic-storage-light",
	});
}

export default Component;
