import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gm22kabjz.css';
import '../../css/m/myw31rfqw.css';
import '../../css/c/cvgdryhog.css';
import '../../css/g/gk-4cegtw.css';
import '../../css/t/t10wifwed.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gm22kabjz"/><path class="myw31rfqw"/><path class="cvgdryhog"/><path class="gk-4cegtw"/><path class="t10wifwed"/></g>`,
		"fallback": "streamline-flex-color:speaker-1",
	});
}

export default Component;
