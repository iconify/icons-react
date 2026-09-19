import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qknx832so.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBYCIBewW"><path class="qknx832so"/></mask></defs><path mask="url(#SVGBYCIBewW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:people",
	});
}

export default Component;
