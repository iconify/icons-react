import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cew6qzb9g.css';
import '../../css/j/jfm4b5g2t.css';
import '../../css/h/hw1k-4b8v.css';
import '../../css/s/slg4b2kmi.css';
import '../../css/j/jp_4obfki.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cew6qzb9g"/><path class="jfm4b5g2t"/><path class="hw1k-4b8v"/><path class="slg4b2kmi"/><path class="jp_4obfki"/></g>`,
		"fallback": "streamline-kameleon-color:settings-4-duo",
	});
}

export default Component;
