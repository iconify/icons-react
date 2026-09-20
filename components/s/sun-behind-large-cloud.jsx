import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-_--fsoi.css';
import '../../css/j/j6i4onbld.css';
import '../../css/e/enk7wwm3a.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/b/b-34arh6n.css';
import '../../css/x/xr454ubku.css';
import '../../css/j/j99mzacih.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-_--fsoi"/><path class="j6i4onbld"/><path class="enk7wwm3a"/><g class="rpvb-o6bq"><path class="b-34arh6n"/><path class="xr454ubku"/><path class="j99mzacih"/></g>`,
		"fallback": "openmoji:sun-behind-large-cloud",
	});
}

export default Component;
