import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozis5k_fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ozis5k_fq"/>`,
		"fallback": "iconoir:number-0-square-solid",
	});
}

export default Component;
