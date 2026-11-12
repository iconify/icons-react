import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7669jb6f.css';
import '../../css/h/hze02wt4y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="t7669jb6f"/><path class="hze02wt4y"/>`,
		"fallback": "selfhst:plex",
	});
}

export default Component;
