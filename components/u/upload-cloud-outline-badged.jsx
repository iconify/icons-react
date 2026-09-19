import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qga2a08ds.css';
import '../../css/j/j7p4iebhi.css';
import '../../css/y/yeqg2frrd.css';
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
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged qga2a08ds"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged j7p4iebhi"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged yeqg2frrd"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:upload-cloud-outline-badged",
	});
}

export default Component;
