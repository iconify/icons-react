import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r30t8djrj.css';
import '../../css/b/b-ejs9bpn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r30t8djrj"/><rect class="b-ejs9bpn"/>`,
		"fallback": "garden:lock-locked-fill-12",
	});
}

export default Component;
