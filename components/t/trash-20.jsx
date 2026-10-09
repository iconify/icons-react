import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9gz9fbhp.css';
import '../../css/p/p2k_2wbpy.css';
import '../../css/u/uy7atjbxq.css';
import '../../css/k/ksihj8sfd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9gz9fbhp"/><path class="p2k_2wbpy"/><path class="uy7atjbxq"/><path class="ksihj8sfd"/>`,
		"fallback": "energy-icons:trash-20",
	});
}

export default Component;
