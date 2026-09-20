import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aedcft.css';
import '../../css/c/chdxye.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-34.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aedcft"/><path class="chdxye"/>`,
		"fallback": "line-md:star-half-twotone",
	});
}

export default Component;
