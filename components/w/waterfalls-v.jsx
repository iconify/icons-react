import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1n80sbjy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4tu5obwu"><path class="d1n80sbjy"/></mask></defs><path mask="url(#SVG4tu5obwu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:waterfalls-v",
	});
}

export default Component;
