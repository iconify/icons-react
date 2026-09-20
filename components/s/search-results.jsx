import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s264hrbbe.css';
import '../../css/m/m5n_ehoon.css';
import '../../css/k/kemfy5bie.css';
import '../../css/d/d9s5sfbtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s264hrbbe"/><path class="m5n_ehoon"/><path clip-rule="evenodd" class="kemfy5bie"/><path class="d9s5sfbtl"/>`,
		"fallback": "stash:search-results",
	});
}

export default Component;
