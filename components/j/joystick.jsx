import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/e9waokbhr.css';
import '../../css/g/g7z2j-78e.css';
import '../../css/q/q7do0tepr.css';
import '../../css/c/c1t--rtgz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGT468QRJI"><g class="v3_i3wktz"><path class="e9waokbhr"/><path class="g7z2j-78e"/><path class="q7do0tepr"/><path class="c1t--rtgz"/></g></mask></defs><path mask="url(#SVGT468QRJI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:joystick",
	});
}

export default Component;
