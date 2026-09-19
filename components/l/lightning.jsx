import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6p0_bl_n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWJIstexD"><path class="v6p0_bl_n"/></mask></defs><path mask="url(#SVGWJIstexD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:lightning",
	});
}

export default Component;
