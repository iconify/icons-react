import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxxz6v6tu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtMBvKcON"><path class="hxxz6v6tu"/></mask></defs><path mask="url(#SVGtMBvKcON)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:like",
	});
}

export default Component;
