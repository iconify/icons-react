import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8d079btr.css';
import '../../css/r/rxqvapbkk.css';
import '../../css/t/t399ikbmi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8d079btr"/><path class="rxqvapbkk"/><path class="t399ikbmi"/>`,
		"fallback": "teenyicons:rust-solid",
	});
}

export default Component;
