import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/k/kpvsov5-h.css';
import '../../css/o/ob_54lbpg.css';
import '../../css/d/dtkxror1v.css';
import '../../css/i/iuiglo4ta.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGR7XHoc8e"><g class="gopnm44um"><path class="kpvsov5-h"/><circle class="ob_54lbpg"/><path class="dtkxror1v"/><path class="iuiglo4ta"/></g></mask></defs><path mask="url(#SVGR7XHoc8e)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:radio-nanny",
	});
}

export default Component;
