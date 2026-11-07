import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwtm_3btu.css';
import '../../css/m/mdrgupb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dwtm_3btu"/><path class="mdrgupb7j"/>`,
		"fallback": "solar:star-rings-bold-duotone",
	});
}

export default Component;
