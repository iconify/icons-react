import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwxd6gr7h.css';
import '../../css/g/g-drd0b-w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwxd6gr7h"/><path class="g-drd0b-w"/>`,
		"fallback": "devicon:quasar",
	});
}

export default Component;
