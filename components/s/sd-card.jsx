import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/qpv4-xb_q.css';
import '../../css/c/co5bs60od.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6erkcbvq"><g class="s9cl3zbei"><path clip-rule="evenodd" class="qpv4-xb_q"/><path class="co5bs60od"/></g></mask></defs><path mask="url(#SVG6erkcbvq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:sd-card",
	});
}

export default Component;
