import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e6x_babbs.css';
import '../../css/i/iiwvrybnk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvo2rAduP"><g class="aql7dnt-u"><path class="e6x_babbs"/><path class="iiwvrybnk"/></g></mask></defs><path mask="url(#SVGvo2rAduP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:magnet",
	});
}

export default Component;
