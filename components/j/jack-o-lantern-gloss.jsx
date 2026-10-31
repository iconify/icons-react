import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt9rf2bnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt9rf2bnd"/>`,
		"fallback": "withicons:jack-o-lantern-gloss",
	});
}

export default Component;
