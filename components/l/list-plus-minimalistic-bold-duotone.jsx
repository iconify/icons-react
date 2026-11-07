import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/lbue7y00m.css';
import '../../css/t/twoigx9_z.css';
import '../../css/r/rg7rardxv.css';
import '../../css/t/texlxzb4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="lbue7y00m"/><path class="twoigx9_z"/><path class="rg7rardxv"/></g><path class="texlxzb4e"/>`,
		"fallback": "solar:list-plus-minimalistic-bold-duotone",
	});
}

export default Component;
