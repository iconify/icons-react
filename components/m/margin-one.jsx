import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/k/kn9vitymh.css';
import '../../css/w/wz7tiec4e.css';
import '../../css/g/gscjf6uxr.css';
import '../../css/o/o1zhvxbql.css';
import '../../css/e/e0ps1gbcy.css';
import '../../css/r/ro71gokoa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="kn9vitymh"/><path class="wz7tiec4e"/><path class="gscjf6uxr"/><path class="o1zhvxbql"/><path class="e0ps1gbcy"/><path class="ro71gokoa"/></g>`,
		"fallback": "icon-park:margin-one",
	});
}

export default Component;
