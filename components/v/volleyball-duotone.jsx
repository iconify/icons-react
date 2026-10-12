import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iw71_wb_u.css';
import '../../css/i/iv-2ojbcv.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/f/f7jbikrys.css';
import '../../css/y/ya652jbio.css';
import '../../css/o/onxz9exsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iw71_wb_u"/><path class="iv-2ojbcv"/><path class="g4vvtk_cw"/><path class="f7jbikrys"/><path class="ya652jbio"/><path class="onxz9exsy"/></g>`,
		"fallback": "lucide-extended:volleyball-duotone",
	});
}

export default Component;
