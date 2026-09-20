import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2nuqwbjn.css';
import '../../css/a/a252uws5j.css';
import '../../css/o/o5wwyrhwr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2nuqwbjn"/><path class="a252uws5j"/><path class="o5wwyrhwr"/>`,
		"fallback": "selfhst:readmeabook",
	});
}

export default Component;
