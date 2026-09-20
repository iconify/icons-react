import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y379_3lgr.css';
import '../../css/o/o774rzb4z.css';
import '../../css/x/xd1z83qkw.css';
import '../../css/v/vygt9fbkg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y379_3lgr"/><path class="o774rzb4z"/><path class="xd1z83qkw"/><path class="vygt9fbkg"/>`,
		"fallback": "selfhst:socialhome",
	});
}

export default Component;
