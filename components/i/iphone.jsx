import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/f5fbzg0tg.css';
import '../../css/k/k4kf9d06i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9DWsV99s"><g class="rohhhzb0l"><rect class="f5fbzg0tg"/><path class="k4kf9d06i"/></g></mask></defs><path mask="url(#SVG9DWsV99s)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:iphone",
	});
}

export default Component;
