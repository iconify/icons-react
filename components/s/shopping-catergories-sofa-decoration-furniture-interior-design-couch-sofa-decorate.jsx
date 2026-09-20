import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/ct7lk7b_v.css';
import '../../css/q/qd5h8fb2e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="ct7lk7b_v"/><path class="qd5h8fb2e"/></g>`,
		"fallback": "streamline:shopping-catergories-sofa-decoration-furniture-interior-design-couch-sofa-decorate",
	});
}

export default Component;
