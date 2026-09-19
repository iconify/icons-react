import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpfslacob.css';
import '../../css/d/dq9_gaclr.css';
import '../../css/c/clvzc9bjd.css';
import '../../css/v/vciy_oxlq.css';
import '../../css/n/nge6tfbxp.css';
import '../../css/p/pl74cqb7b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="gpfslacob"/><circle class="dq9_gaclr"/><circle class="clvzc9bjd"/><circle class="vciy_oxlq"/><circle class="nge6tfbxp"/><path class="pl74cqb7b"/>`,
		"fallback": "carbon:qq-plot",
	});
}

export default Component;
