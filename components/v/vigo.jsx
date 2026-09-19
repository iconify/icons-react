import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqm362b6a.css';
import '../../css/d/d-4a0z9di.css';
import '../../css/x/xivpqbu3r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0UvZ7geU"><g class="pqm362b6a"><path class="d-4a0z9di"/><path class="xivpqbu3r"/></g></mask></defs><path mask="url(#SVG0UvZ7geU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:vigo",
	});
}

export default Component;
