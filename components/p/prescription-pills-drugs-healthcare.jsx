import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gvdfs39sj.css';
import '../../css/q/qnm012b2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gvdfs39sj"/><path class="qnm012b2m"/></g>`,
		"fallback": "streamline-sharp:prescription-pills-drugs-healthcare",
	});
}

export default Component;
