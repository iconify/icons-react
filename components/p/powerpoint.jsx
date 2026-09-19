import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/v/vw-jy7_8n.css';
import '../../css/r/r6bk7gbmf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="xhdah4bbl"/><rect class="vw-jy7_8n"/><path class="r6bk7gbmf"/></g>`,
		"fallback": "icon-park:powerpoint",
	});
}

export default Component;
