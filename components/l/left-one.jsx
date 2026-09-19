import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx7st-bid.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDulKzedE"><path class="bx7st-bid"/></mask></defs><path mask="url(#SVGDulKzedE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:left-one",
	});
}

export default Component;
