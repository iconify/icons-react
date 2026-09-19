import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/msv6_bc6s.css';
import '../../css/e/eowf-ngqj.css';
import '../../css/s/s89v55brw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcXNH2dMl"><g class="s9cl3zbei"><path class="msv6_bc6s"/><path class="eowf-ngqj"/><path class="s89v55brw"/></g></mask></defs><path mask="url(#SVGcXNH2dMl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:seo-folder",
	});
}

export default Component;
