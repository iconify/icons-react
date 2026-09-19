import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/et3i3ja-x.css';
import '../../css/f/fzjlzb7dq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfRFtuddH"><g class="aql7dnt-u"><path class="et3i3ja-x"/><path class="fzjlzb7dq"/></g></mask></defs><path mask="url(#SVGfRFtuddH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:seedling",
	});
}

export default Component;
