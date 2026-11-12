import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu0g0bc4b.css';
import '../../css/g/gn_ul3b0m.css';
import '../../css/f/fm6zmpb9p.css';
import '../../css/a/ajhjdgk1x.css';
import '../../css/p/pquylo05r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu0g0bc4b"/><path class="gn_ul3b0m"/><path class="fm6zmpb9p"/><path class="ajhjdgk1x"/><path class="pquylo05r"/>`,
		"fallback": "selfhst:scatola-magica-light",
	});
}

export default Component;
