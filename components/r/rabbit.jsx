import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxqtqwbiu.css';
import '../../css/y/ymqi1-bqp.css';
import '../../css/q/qkzx3-bvi.css';
import '../../css/m/mgnyrhbia.css';
import '../../css/l/l7-2div4f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGu1dr1bhg"><g class="ft5dv1b6b"><ellipse class="oxqtqwbiu"/><circle class="ymqi1-bqp"/><circle class="qkzx3-bvi"/><circle class="mgnyrhbia"/><path class="l7-2div4f"/></g></mask></defs><path mask="url(#SVGu1dr1bhg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rabbit",
	});
}

export default Component;
