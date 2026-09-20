import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/k/kppphc2fq.css';
import '../../css/x/x-6so0btp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="kppphc2fq"/><path class="x-6so0btp"/></g>`,
		"fallback": "streamline-kameleon-color:peace",
	});
}

export default Component;
