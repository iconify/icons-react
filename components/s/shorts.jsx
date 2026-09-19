import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/phem8ng6e.css';
import '../../css/p/pg706ac6b.css';
import '../../css/q/q46dpkbew.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6qgA8cHB"><g class="ft5dv1b6b"><path class="phem8ng6e"/><path class="pg706ac6b"/><path class="q46dpkbew"/></g></mask></defs><path mask="url(#SVG6qgA8cHB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:shorts",
	});
}

export default Component;
