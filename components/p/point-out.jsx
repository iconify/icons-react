import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9y7s-r2s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJzsKOqQJ"><path class="r9y7s-r2s"/></mask></defs><path mask="url(#SVGJzsKOqQJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:point-out",
	});
}

export default Component;
