import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/j/j0y2l9mlo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMLijZn5E"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="j0y2l9mlo"/></g></mask></defs><path mask="url(#SVGMLijZn5E)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:sketch",
	});
}

export default Component;
