import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge30c7t1y.css';
import '../../css/q/qlod68b4m.css';
import '../../css/o/owaw-8bmd.css';
import '../../css/h/hl25b9hpu.css';
import '../../css/b/b93a7obub.css';
import '../../css/c/csq3f9b9w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge30c7t1y"/><path class="qlod68b4m"/><path class="owaw-8bmd"/><path class="hl25b9hpu"/><path class="b93a7obub"/><path class="csq3f9b9w"/>`,
		"fallback": "fxemoji:teacupwithouthandle",
	});
}

export default Component;
