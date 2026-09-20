import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md_a79lck.css';
import '../../css/d/dwubu5bir.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md_a79lck"/><path class="dwubu5bir"/>`,
		"fallback": "selfhst:jinear",
	});
}

export default Component;
