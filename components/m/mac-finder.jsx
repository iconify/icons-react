import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/s5kcr4b5f.css';
import '../../css/v/vu69zob8w.css';
import '../../css/u/ul-9w7bgg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="s5kcr4b5f"/><path class="vu69zob8w"/><path class="ul-9w7bgg"/></g>`,
		"fallback": "icon-park-outline:mac-finder",
	});
}

export default Component;
