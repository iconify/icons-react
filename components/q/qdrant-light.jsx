import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2gmwachp.css';
import '../../css/q/qs06oviiv.css';
import '../../css/l/lhdmhjbww.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2gmwachp"/><path class="qs06oviiv"/><path class="lhdmhjbww"/>`,
		"fallback": "selfhst:qdrant-light",
	});
}

export default Component;
