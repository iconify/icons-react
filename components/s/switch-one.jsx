import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/a/aqh7ddbsu.css';
import '../../css/n/n3tpeh1mo.css';
import '../../css/m/mdec_jslv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkYsT2cKT"><g class="s9cl3zbei"><circle class="aqh7ddbsu"/><rect transform="rotate(90 36.006 19.334)" class="n3tpeh1mo"/><rect transform="rotate(-180 36.006 29.852)" class="mdec_jslv"/></g></mask></defs><path mask="url(#SVGkYsT2cKT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:switch-one",
	});
}

export default Component;
