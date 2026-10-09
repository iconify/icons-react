import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v03k1eb5i.css';
import '../../css/e/e3qo4yqzk.css';
import '../../css/c/c65-ehvfy.css';
import '../../css/w/wcooi19sy.css';
import '../../css/s/sok6v4bmv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v03k1eb5i"/><path class="e3qo4yqzk"/><path class="c65-ehvfy"/><path class="wcooi19sy"/><path class="sok6v4bmv"/>`,
		"fallback": "energy-icons:rewilding-48",
	});
}

export default Component;
