import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbx6y9vvp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbx6y9vvp"/>`,
		"fallback": "teenyicons:list-layout-solid",
	});
}

export default Component;
