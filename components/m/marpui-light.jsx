import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmtm5li5d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmtm5li5d"/>`,
		"fallback": "selfhst:marpui-light",
	});
}

export default Component;
