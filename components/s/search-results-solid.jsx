import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq9z85bal.css';
import '../../css/x/xlo2ptjbm.css';
import '../../css/k/kemfy5bie.css';
import '../../css/e/eu-9hmdib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq9z85bal"/><path class="xlo2ptjbm"/><path clip-rule="evenodd" class="kemfy5bie"/><path class="eu-9hmdib"/>`,
		"fallback": "stash:search-results-solid",
	});
}

export default Component;
