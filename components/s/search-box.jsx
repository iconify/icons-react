import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpe_zkb5e.css';
import '../../css/h/heok19bbn.css';
import '../../css/c/cz1u-qu3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpe_zkb5e"/><path class="heok19bbn"/><path class="cz1u-qu3v"/>`,
		"fallback": "stash:search-box",
	});
}

export default Component;
