import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sywh_d5sb.css';
import '../../css/u/uidlf3bnh.css';
import '../../css/h/het1cerok.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1gk2AcMZ"><g class="ft5dv1b6b"><path class="sywh_d5sb"/><path class="uidlf3bnh"/><path class="het1cerok"/></g></mask></defs><path mask="url(#SVG1gk2AcMZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:recent-views-sort",
	});
}

export default Component;
