import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob9sxvbzl.css';
import '../../css/z/zfyfngbdb.css';
import '../../css/l/lnqbgixxr.css';
import '../../css/i/if99olb8w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob9sxvbzl"/><path class="zfyfngbdb"/><path class="lnqbgixxr"/><path class="if99olb8w"/>`,
		"fallback": "selfhst:travstats",
	});
}

export default Component;
