import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp7upebym.css';
import '../../css/j/jn-m6eb8i.css';
import '../../css/m/mpta344_z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xp7upebym"><path class="jn-m6eb8i"/><path class="mpta344_z"/></g>`,
		"fallback": "catppuccin:ionic",
	});
}

export default Component;
