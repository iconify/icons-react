import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ectr5qcqj.css';
import '../../css/u/ud860rbqj.css';
import '../../css/i/iy2lm7bku.css';
import '../../css/q/qbn9wfbgi.css';
import '../../css/k/k3w3y09sg.css';
import '../../css/h/hrd5sxy5u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ectr5qcqj"/><path class="ud860rbqj"/><path class="iy2lm7bku"/><path class="qbn9wfbgi"/><path class="k3w3y09sg"/><path class="hrd5sxy5u"/>`,
		"fallback": "energy-icons:pagoda-20",
	});
}

export default Component;
