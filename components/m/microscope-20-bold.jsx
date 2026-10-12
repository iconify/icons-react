import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpk6ucc_d.css';
import '../../css/z/zm70e2bpm.css';
import '../../css/c/ciep4282w.css';
import '../../css/n/nxoc-wizh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpk6ucc_d"/><path class="zm70e2bpm"/><path class="ciep4282w"/><path class="nxoc-wizh"/>`,
		"fallback": "energy-icons:microscope-20-bold",
	});
}

export default Component;
