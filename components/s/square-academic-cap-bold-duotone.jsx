import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii1sy95ok.css';
import '../../css/n/npymy_hkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii1sy95ok"/><path class="npymy_hkk"/>`,
		"fallback": "solar:square-academic-cap-bold-duotone",
	});
}

export default Component;
