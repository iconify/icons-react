import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/q2imly_dx.css';
import '../../css/n/nc1hzx8vr.css';
import '../../css/m/mg2vvdbge.css';
import '../../css/e/eb8fy6btr.css';
import '../../css/d/diqj5jb-k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="q2imly_dx"/><path class="nc1hzx8vr"/><path class="mg2vvdbge"/><path class="eb8fy6btr"/><path class="diqj5jb-k"/></g>`,
		"fallback": "icon-park:plug-one",
	});
}

export default Component;
