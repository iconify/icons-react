import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp-vsxb4f.css';
import '../../css/w/ws9x54gvl.css';
import '../../css/v/vm_hfeb5b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp-vsxb4f"/><path class="ws9x54gvl"/><path class="vm_hfeb5b"/>`,
		"fallback": "selfhst:rhel-light",
	});
}

export default Component;
