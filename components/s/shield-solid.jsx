import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2g4wqbfa.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2g4wqbfa clr-i-solid clr-i-solid-path-1"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:shield-solid",
	});
}

export default Component;
