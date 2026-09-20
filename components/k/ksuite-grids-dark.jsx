import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajrs5fbzp.css';
import '../../css/h/hkgap18lv.css';
import '../../css/t/t_aewkbjn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajrs5fbzp"/><path class="hkgap18lv"/><path class="t_aewkbjn"/>`,
		"fallback": "selfhst:ksuite-grids-dark",
	});
}

export default Component;
