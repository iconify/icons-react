import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/angv19bzs.css';
import '../../css/q/qqnj1mcie.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkJmMtcqn"><g class="rohhhzb0l"><path clip-rule="evenodd" class="angv19bzs"/><path class="qqnj1mcie"/></g></mask></defs><path mask="url(#SVGkJmMtcqn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pills",
	});
}

export default Component;
