import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgrr25wcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgrr25wcg"/>`,
		"fallback": "thesvg:netcup",
	});
}

export default Component;
