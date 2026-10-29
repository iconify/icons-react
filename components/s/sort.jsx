import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhjefccxr.css';
import '../../css/o/oi3y28bkg.css';
import '../../css/n/nvp42qb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhjefccxr wm-k"/><path class="oi3y28bkg wm-a"/><path class="nvp42qb6d wm-a"/>`,
		"fallback": "withicons-bauhaus:sort",
	});
}

export default Component;
