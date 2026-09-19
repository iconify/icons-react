import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/gp0k69hqw.css';
import '../../css/l/lxw3yac5g.css';
import '../../css/a/a-4yy16xc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><circle class="gp0k69hqw"/><rect transform="rotate(90 36.006 19.334)" class="lxw3yac5g"/><rect transform="rotate(-180 36.006 29.852)" class="a-4yy16xc"/></g>`,
		"fallback": "icon-park:switch-one",
	});
}

export default Component;
