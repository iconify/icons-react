import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlvs94qcj.css';
import '../../css/a/af5wgxf3a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlvs94qcj"/><path class="af5wgxf3a"/>`,
		"fallback": "nimbus:scooter",
	});
}

export default Component;
