import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r18yejbff.css';
import '../../css/q/qmcxffbum.css';
import '../../css/t/twij58b_v.css';
import '../../css/l/l79kylebl.css';
import '../../css/u/uy0hx2qfx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r18yejbff"/><path class="qmcxffbum"/><path class="twij58b_v"/><path class="l79kylebl"/><path class="uy0hx2qfx"/>`,
		"fallback": "material-icon-theme:shellcheck",
	});
}

export default Component;
