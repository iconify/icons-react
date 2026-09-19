import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/j9hg1or3h.css';
import '../../css/h/hn8ry4rfn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbvjRecWc"><g class="v3_i3wktz"><path class="j9hg1or3h"/><path class="hn8ry4rfn"/></g></mask></defs><path mask="url(#SVGbvjRecWc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:monument-two",
	});
}

export default Component;
