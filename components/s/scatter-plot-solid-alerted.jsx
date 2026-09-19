import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep-7cqbna.css';
import '../../css/e/egbtnbclf.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid--alerted clr-i-solid-path-1--alerted ep-7cqbna"/><path class="clr-i-alert clr-i-solid--alerted clr-i-solid-path-2--alerted egbtnbclf"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:scatter-plot-solid-alerted",
	});
}

export default Component;
