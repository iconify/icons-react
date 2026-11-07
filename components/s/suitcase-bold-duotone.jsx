import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m41mmzbsh.css';
import '../../css/a/a922yib7w.css';
import '../../css/u/ulfe3ccxn.css';
import '../../css/t/t99_mr0an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m41mmzbsh"/><path class="a922yib7w"/><path class="ulfe3ccxn"/><path class="t99_mr0an"/>`,
		"fallback": "solar:suitcase-bold-duotone",
	});
}

export default Component;
