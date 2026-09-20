import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glfvk6b0w.css';
import '../../css/k/kbmuw8bfw.css';
import '../../css/j/jxi6a_dgv.css';
import '../../css/g/g7f4pbc4j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glfvk6b0w"/><path class="kbmuw8bfw"/><path class="jxi6a_dgv"/><path class="g7f4pbc4j"/>`,
		"fallback": "temaki:tall-gate",
	});
}

export default Component;
