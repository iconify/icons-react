import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de_dzzb4w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de_dzzb4w"/>`,
		"fallback": "selfhst:nitter-light",
	});
}

export default Component;
