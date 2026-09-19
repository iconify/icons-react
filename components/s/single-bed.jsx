import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f2ykp2y6k.css';
import '../../css/i/in-_6kuqc.css';
import '../../css/s/s0vg7idxu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGy9PwHe2R"><g class="aql7dnt-u"><path class="f2ykp2y6k"/><path class="in-_6kuqc"/><path class="s0vg7idxu"/></g></mask></defs><path mask="url(#SVGy9PwHe2R)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:single-bed",
	});
}

export default Component;
