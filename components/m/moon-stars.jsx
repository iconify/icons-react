import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3a194bvl.css';
import '../../css/d/dnmle-98o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer w3a194bvl"/><path class="dnmle-98o duoicon-primary-layer"/>`,
		"fallback": "duo-icons:moon-stars",
	});
}

export default Component;
