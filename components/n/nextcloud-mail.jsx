import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou4p7f2ib.css';
import '../../css/j/jc3uzbbnw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou4p7f2ib"/><path class="jc3uzbbnw"/>`,
		"fallback": "selfhst:nextcloud-mail",
	});
}

export default Component;
