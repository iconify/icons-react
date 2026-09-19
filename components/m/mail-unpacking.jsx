import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/gt-mihb7i.css';
import '../../css/h/hvzd0ubol.css';
import '../../css/m/m43u05b5h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGf92m1bHZ"><g class="v3_i3wktz"><path class="gt-mihb7i"/><path class="hvzd0ubol"/><path class="m43u05b5h"/></g></mask></defs><path mask="url(#SVGf92m1bHZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:mail-unpacking",
	});
}

export default Component;
