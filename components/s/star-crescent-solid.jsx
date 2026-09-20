import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chq-6r-9v.css';
import '../../css/b/btvzwg_0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chq-6r-9v"/><path class="btvzwg_0d"/>`,
		"fallback": "pixel:star-crescent-solid",
	});
}

export default Component;
