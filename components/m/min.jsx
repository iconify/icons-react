import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/ac8ev1bcp.css';
import '../../css/r/rkidmlb8f.css';
import '../../css/b/brl5ag4pd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ac8ev1bcp"/><path class="rkidmlb8f"/><path class="brl5ag4pd"/></g>`,
		"fallback": "icon-park:min",
	});
}

export default Component;
