import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ttjhupk7f.css';
import '../../css/p/pu70qibba.css';
import '../../css/c/c_392u7jp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ttjhupk7f"/><path class="pu70qibba"/><path class="c_392u7jp"/></g>`,
		"fallback": "tabler:wallpaper-off",
	});
}

export default Component;
