import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mnrl3ibde.css';
import '../../css/c/c6vm4iasj.css';
import '../../css/a/azzo_79pk.css';
import '../../css/o/o7tc-9b2f.css';
import '../../css/y/y4zg4_xvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mnrl3ibde"/><path class="c6vm4iasj"/><circle class="azzo_79pk"/><path class="o7tc-9b2f"/><path class="y4zg4_xvf"/></g>`,
		"fallback": "lets-icons:package-search",
	});
}

export default Component;
