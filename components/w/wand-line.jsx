import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/taglg-g8l.css';
import '../../css/d/d596urw4w.css';
import '../../css/f/fosmaibkm.css';
import '../../css/o/o4_qjwblv.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 taglg-g8l"/><path class="clr-i-outline clr-i-outline-path-2 d596urw4w"/><path class="clr-i-outline clr-i-outline-path-3 fosmaibkm"/><path class="clr-i-outline clr-i-outline-path-4 o4_qjwblv"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:wand-line",
	});
}

export default Component;
