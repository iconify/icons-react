import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9sroks9g.css';
import '../../css/s/s53vmbcgz.css';
import '../../css/r/rlosknbna.css';
import '../../css/k/kmezwrwcb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9sroks9g"/><g class="s53vmbcgz"><path class="rlosknbna"/><path class="kmezwrwcb"/></g>`,
		"fallback": "catppuccin:luau-client",
	});
}

export default Component;
