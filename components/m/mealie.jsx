import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm_90bcmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm_90bcmw"/>`,
		"fallback": "thesvg:mealie",
	});
}

export default Component;
