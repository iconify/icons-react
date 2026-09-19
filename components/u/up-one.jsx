import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf493jmyr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOquiGdSs"><path class="cf493jmyr"/></mask></defs><path mask="url(#SVGOquiGdSs)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:up-one",
	});
}

export default Component;
