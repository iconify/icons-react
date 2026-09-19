import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j848glbsj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXXXG9bEB"><path class="j848glbsj"/></mask></defs><path mask="url(#SVGXXXG9bEB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pushpin",
	});
}

export default Component;
