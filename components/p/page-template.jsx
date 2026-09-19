import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy-g5sp0v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZZ153dkC"><path class="gy-g5sp0v"/></mask></defs><path mask="url(#SVGZZ153dkC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:page-template",
	});
}

export default Component;
