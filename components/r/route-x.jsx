import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj291gf-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj291gf-a"/>`,
		"fallback": "noviair:route-x",
	});
}

export default Component;
