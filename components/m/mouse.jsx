import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/ir0k51bkp.css';
import '../../css/d/du-vibcig.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGp6iL6bft"><g class="aql7dnt-u"><path clip-rule="evenodd" class="ir0k51bkp"/><path class="du-vibcig"/></g></mask></defs><path mask="url(#SVGp6iL6bft)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:mouse",
	});
}

export default Component;
