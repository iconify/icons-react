import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz646ky1a.css';
import '../../css/a/aucdcts6t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz646ky1a"/><path class="aucdcts6t"/>`,
		"fallback": "selfhst:reaparr-light",
	});
}

export default Component;
