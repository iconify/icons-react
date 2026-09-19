import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/i52zvrbop.css';
import '../../css/y/yhpmvvbra.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGviwhKdRv"><g class="v3_i3wktz"><path class="i52zvrbop"/><path class="yhpmvvbra"/></g></mask></defs><path mask="url(#SVGviwhKdRv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rectangular-circular-separation",
	});
}

export default Component;
