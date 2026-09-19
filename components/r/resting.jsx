import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h6z-69bjv.css';
import '../../css/o/ond75zu1p.css';
import '../../css/h/hmg-5dugg.css';
import '../../css/q/qp833-mnc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5BFpLirz"><g class="aql7dnt-u"><path class="h6z-69bjv"/><path class="ond75zu1p"/><path class="hmg-5dugg"/><path class="qp833-mnc"/></g></mask></defs><path mask="url(#SVG5BFpLirz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:resting",
	});
}

export default Component;
