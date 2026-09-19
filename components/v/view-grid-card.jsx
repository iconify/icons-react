import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/t/thew5jb6s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCxcX3bgT"><g class="ylrso7y3c"><rect class="r8cyu3bwz"/><path class="thew5jb6s"/></g></mask></defs><path mask="url(#SVGCxcX3bgT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:view-grid-card",
	});
}

export default Component;
