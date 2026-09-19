import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g57d7ra_n.css';
import '../../css/o/otje0u_kc.css';
import '../../css/j/jcjzhubjm.css';
import '../../css/w/wcqq8obof.css';
import '../../css/v/v3dqhubcd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGT9e96bes"><g class="ft5dv1b6b"><path class="g57d7ra_n"/><path class="otje0u_kc"/><path class="jcjzhubjm"/><circle class="wcqq8obof"/><path class="v3dqhubcd"/></g></mask></defs><path mask="url(#SVGT9e96bes)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:monitor-one",
	});
}

export default Component;
