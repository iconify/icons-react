import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/u_yu_z0ri.css';
import '../../css/i/imnm-7_fw.css';
import '../../css/w/wd_ka24qp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMqVYreIW"><g class="s9cl3zbei"><path class="u_yu_z0ri"/><path class="imnm-7_fw"/><path class="wd_ka24qp"/></g></mask></defs><path mask="url(#SVGMqVYreIW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:lincoln",
	});
}

export default Component;
