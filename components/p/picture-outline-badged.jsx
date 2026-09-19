import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euf4rqbsc.css';
import '../../css/o/ofqyjfb8f.css';
import '../../css/o/osbfcbcig.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged euf4rqbsc"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged ofqyjfb8f"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged osbfcbcig"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:picture-outline-badged",
	});
}

export default Component;
