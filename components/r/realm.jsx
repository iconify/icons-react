import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kstrikl_o.css';
import '../../css/y/yscjrs98h.css';
import '../../css/s/sl5zv_bga.css';
import '../../css/u/ulya8fbkx.css';
import '../../css/k/k2gdg_09l.css';
import '../../css/g/ghh_yabtl.css';
import '../../css/b/bdlahc8ak.css';
import '../../css/x/xg5z3xeav.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kstrikl_o"/><path class="yscjrs98h"/><path class="sl5zv_bga"/><path class="ulya8fbkx"/><path class="k2gdg_09l"/><path class="ghh_yabtl"/><path class="bdlahc8ak"/><path class="xg5z3xeav"/>`,
		"fallback": "thesvg-color:realm",
	});
}

export default Component;
