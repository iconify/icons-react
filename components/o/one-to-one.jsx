import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/r-8dawoyr.css';
import '../../css/g/g-you1b7c.css';
import '../../css/v/vmbylbb-t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGh3sIkedk"><g class="rohhhzb0l"><path class="r-8dawoyr"/><path class="g-you1b7c"/><path class="vmbylbb-t"/></g></mask></defs><path mask="url(#SVGh3sIkedk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:one-to-one",
	});
}

export default Component;
