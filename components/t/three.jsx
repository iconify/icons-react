import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u470c7btl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIsYipbDd"><path class="u470c7btl"/></mask></defs><path mask="url(#SVGIsYipbDd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:three",
	});
}

export default Component;
