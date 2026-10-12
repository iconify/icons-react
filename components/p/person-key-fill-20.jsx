import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et_p5ualv.css';
import '../../css/r/rudk2pbyb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et_p5ualv"/><path class="rudk2pbyb"/>`,
		"fallback": "garden:person-key-fill-20",
	});
}

export default Component;
