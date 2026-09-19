import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk1_sxblw.css';
import '../../css/j/jqc7hmb-f.css';
import '../../css/s/sm_isp06h.css';
import '../../css/o/o8ff8w-sp.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk1_sxblw"/><path class="jqc7hmb-f"/><path class="sm_isp06h"/><path class="o8ff8w-sp"/>`,
		"fallback": "gis:sld",
	});
}

export default Component;
