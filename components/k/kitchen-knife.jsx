import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pr1i_9hyb.css';
import '../../css/m/mvrdqjb2o.css';
import '../../css/j/j2t_tubbx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1DkFmeGu"><g class="ft5dv1b6b"><path class="pr1i_9hyb"/><path class="mvrdqjb2o"/><circle class="j2t_tubbx"/></g></mask></defs><path mask="url(#SVG1DkFmeGu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:kitchen-knife",
	});
}

export default Component;
