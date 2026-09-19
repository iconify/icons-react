import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo1tk3-8o.css';
import '../../css/x/x18puqb7i.css';
import '../../css/w/w8jozfhvk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAlPGBhXj"><g class="zo1tk3-8o"><path class="x18puqb7i"/><path class="w8jozfhvk"/></g></mask></defs><path mask="url(#SVGAlPGBhXj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:vigo",
	});
}

export default Component;
