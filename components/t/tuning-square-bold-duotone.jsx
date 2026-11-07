import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_hji6de.css';
import '../../css/h/hyq0q9b8g.css';
import '../../css/q/qjp63yb9e.css';
import '../../css/x/xs03_8unf.css';
import '../../css/k/kqg7wdbzl.css';
import '../../css/x/xlara-bno.css';
import '../../css/c/culfoohto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_hji6de"/><path class="hyq0q9b8g"/><path class="qjp63yb9e"/><path class="xs03_8unf"/><path class="kqg7wdbzl"/><path clip-rule="evenodd" class="xlara-bno"/><path clip-rule="evenodd" class="culfoohto"/>`,
		"fallback": "solar:tuning-square-bold-duotone",
	});
}

export default Component;
