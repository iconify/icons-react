import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/zqaj_9bwa.css';
import '../../css/p/pn6-4jb6j.css';
import '../../css/x/x_z7i22sw.css';
import '../../css/k/kb-9i9byf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="zqaj_9bwa"/><path class="pn6-4jb6j"/><path class="x_z7i22sw"/><path class="kb-9i9byf"/></g>`,
		"fallback": "streamline-plump-color:skull-2",
	});
}

export default Component;
