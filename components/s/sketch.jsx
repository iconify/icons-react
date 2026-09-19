import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/c/c0nek6qtv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMI25Wb1H"><g class="ylrso7y3c"><rect class="r8cyu3bwz"/><path class="c0nek6qtv"/></g></mask></defs><path mask="url(#SVGMI25Wb1H)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sketch",
	});
}

export default Component;
