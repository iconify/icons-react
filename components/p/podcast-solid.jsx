import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gofrvbhmp.css';
import '../../css/d/d9nzp3e2z.css';
import '../../css/z/zcsc2k1xt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gofrvbhmp"/><path class="d9nzp3e2z"/><path class="zcsc2k1xt"/>`,
		"fallback": "stash:podcast-solid",
	});
}

export default Component;
