import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dfk8jdnek.css';
import '../../css/g/gvx2gxbfq.css';
import '../../css/n/n3i13bc7c.css';
import '../../css/v/voo9izbdb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dfk8jdnek"/><circle class="gvx2gxbfq"/><circle class="n3i13bc7c"/><path class="voo9izbdb"/></g>`,
		"fallback": "streamline:interface-edit-skull-1-crash-death-delete-die-error-garbage-remove-skull-trash",
	});
}

export default Component;
