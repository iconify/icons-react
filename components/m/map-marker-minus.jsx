import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/e/eqnauu.css';
import '../../css/c/cmd1at.css';
import '../../css/t/tv0h4f.css';
import '../../css/s/so-from-48.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c eqnauu"/><circle class="cmd1at"/><path class="a0m25c tv0h4f"/>`,
		"fallback": "line-md:map-marker-minus",
	});
}

export default Component;
