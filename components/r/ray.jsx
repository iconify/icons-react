import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0htrpbhr.css';
import '../../css/h/hbcr0mbsz.css';
import '../../css/e/empd4xbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0htrpbhr"/><path class="hbcr0mbsz"/><path class="empd4xbpa"/>`,
		"fallback": "token:ray",
	});
}

export default Component;
