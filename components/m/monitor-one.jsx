import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g57d7ra_n.css';
import '../../css/w/w2n9sq4-n.css';
import '../../css/j/jcjzhubjm.css';
import '../../css/z/zqs1pywbv.css';
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
		"content": `<defs><mask id="SVGmTL0qcou"><g class="ft5dv1b6b"><path class="g57d7ra_n"/><path class="w2n9sq4-n"/><path class="jcjzhubjm"/><circle class="zqs1pywbv"/><path class="v3dqhubcd"/></g></mask></defs><path mask="url(#SVGmTL0qcou)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:monitor-one",
	});
}

export default Component;
