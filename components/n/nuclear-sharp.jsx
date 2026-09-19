import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7d-ndb_c.css';
import '../../css/i/if1j4p61s.css';
import '../../css/b/bqprax02h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="q7d-ndb_c"/><path class="if1j4p61s"/><path class="bqprax02h"/>`,
		"fallback": "ion:nuclear-sharp",
	});
}

export default Component;
