import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/q/qe0g46bxg.css';
import '../../css/e/euxi43hbo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWVRuoepI"><g class="v3_i3wktz"><path class="qe0g46bxg"/><path class="euxi43hbo"/></g></mask></defs><path mask="url(#SVGWVRuoepI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:phone-call",
	});
}

export default Component;
