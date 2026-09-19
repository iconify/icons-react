import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z1aubbazh.css';
import '../../css/s/sjjhyfbaz.css';
import '../../css/b/b-_wdgl5d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhcxICbYU"><g class="ft5dv1b6b"><path clip-rule="evenodd" class="z1aubbazh"/><path class="sjjhyfbaz"/><path class="b-_wdgl5d"/></g></mask></defs><path mask="url(#SVGhcxICbYU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:shopping-mall",
	});
}

export default Component;
