import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xkieo5brz.css';
import '../../css/v/vi8de4bfs.css';
import '../../css/l/l8scj5ofw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnOHGUbKR"><g class="ft5dv1b6b"><path class="xkieo5brz"/><path class="vi8de4bfs"/><path class="l8scj5ofw"/></g></mask></defs><path mask="url(#SVGnOHGUbKR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:skate",
	});
}

export default Component;
