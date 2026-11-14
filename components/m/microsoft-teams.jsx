import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a1ibtdbnq.css';
import '../../css/a/ay6sqcctf.css';
import '../../css/w/w22cj2-bq.css';
import '../../css/r/rd5yq9v5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="a1ibtdbnq"/><circle class="ay6sqcctf"/><path class="w22cj2-bq"/><path class="rd5yq9v5n"/></g>`,
		"fallback": "hugeicons:microsoft-teams",
	});
}

export default Component;
