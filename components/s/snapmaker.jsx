import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sducl6b4p.css';
import '../../css/r/rvcp9fbuk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sducl6b4p"/><path class="rvcp9fbuk"/>`,
		"fallback": "selfhst:snapmaker",
	});
}

export default Component;
