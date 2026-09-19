import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s5td0jb4d.css';
import '../../css/o/odppklabi.css';
import '../../css/j/j38ikxqda.css';
import '../../css/j/j5qla9isy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s5td0jb4d"/><path class="odppklabi"/><path class="j38ikxqda"/><path class="j5qla9isy"/></g>`,
		"fallback": "icon-park:three-triangles",
	});
}

export default Component;
