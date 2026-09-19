import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/clv75subd.css';
import '../../css/d/d_63unb4q.css';
import '../../css/q/qumoe9brk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiEVe8diH"><g class="s9cl3zbei"><path class="clv75subd"/><path class="d_63unb4q"/><path class="qumoe9brk"/></g></mask></defs><path mask="url(#SVGiEVe8diH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:intercom",
	});
}

export default Component;
