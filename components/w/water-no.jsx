import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/jmbehwz-g.css';
import '../../css/d/de0sabcdg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhty1LeUl"><g class="aql7dnt-u"><path class="jmbehwz-g"/><path class="de0sabcdg"/></g></mask></defs><path mask="url(#SVGhty1LeUl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:water-no",
	});
}

export default Component;
