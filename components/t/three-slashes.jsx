import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcy96uaty.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvq0smcdQ"><path class="fcy96uaty"/></mask></defs><path mask="url(#SVGvq0smcdQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:three-slashes",
	});
}

export default Component;
