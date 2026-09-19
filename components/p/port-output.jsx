import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp_wowb2j.css';
import '../../css/l/lt2mkcbkk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp_wowb2j"/><path class="lt2mkcbkk"/>`,
		"fallback": "carbon:port-output",
	});
}

export default Component;
