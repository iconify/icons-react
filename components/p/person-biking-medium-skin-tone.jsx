import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f--rpx6kf.css';
import '../../css/c/cdcw17j_s.css';
import '../../css/n/nbc6qjezz.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/w/wtyn-hhqn.css';
import '../../css/q/q1fy91bdm.css';
import '../../css/m/mvtlnqb9a.css';
import '../../css/m/mvxt65bwh.css';
import '../../css/s/sq5eprz8d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="f--rpx6kf"><circle class="cdcw17j_s"/><path class="nbc6qjezz"/></g><g class="x8poo_bjf"><circle class="cdcw17j_s"/><path class="wtyn-hhqn"/><circle class="q1fy91bdm"/><circle class="mvtlnqb9a"/><path class="mvxt65bwh"/><path class="sq5eprz8d"/></g>`,
		"fallback": "openmoji:person-biking-medium-skin-tone",
	});
}

export default Component;
