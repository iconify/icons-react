import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo_dqemwo.css';
import '../../css/r/r-kz3ibtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo_dqemwo"/><path class="r-kz3ibtz"/>`,
		"fallback": "stash:search-box-duotone",
	});
}

export default Component;
