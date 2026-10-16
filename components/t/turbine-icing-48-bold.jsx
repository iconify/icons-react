import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohxaxlikf.css';
import '../../css/v/v9f037bmv.css';
import '../../css/t/tdmdn5b6p.css';
import '../../css/u/u8o-1zw3y.css';
import '../../css/r/r27egwo_t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohxaxlikf"/><path class="v9f037bmv"/><path class="tdmdn5b6p"/><path class="u8o-1zw3y"/><path class="r27egwo_t"/>`,
		"fallback": "energy-icons:turbine-icing-48-bold",
	});
}

export default Component;
