import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/ndc-l7b8p.css';
import '../../css/p/pic726iix.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfQiVYcKa"><g class="aql7dnt-u"><path class="ndc-l7b8p"/><path class="pic726iix"/></g></mask></defs><path mask="url(#SVGfQiVYcKa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:milk",
	});
}

export default Component;
