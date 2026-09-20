import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb444nbdj.css';
import '../../css/u/uj-pmt-ih.css';
import '../../css/r/rlbz7sbfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb444nbdj"/><path class="uj-pmt-ih"/><path class="rlbz7sbfl"/>`,
		"fallback": "stash:pix-solid",
	});
}

export default Component;
