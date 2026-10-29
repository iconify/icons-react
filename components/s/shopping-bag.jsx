import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsgqmskrc.css';
import '../../css/o/o0y5tdbqm.css';
import '../../css/s/sga_f_diy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsgqmskrc wm-a"/><path class="o0y5tdbqm wm-k"/><path class="sga_f_diy wm-a"/>`,
		"fallback": "withicons-bauhaus:shopping-bag",
	});
}

export default Component;
