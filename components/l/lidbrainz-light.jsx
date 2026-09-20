import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv017rgfy.css';
import '../../css/a/aefel7b-l.css';
import '../../css/a/a0ch81bxw.css';
import '../../css/w/w4-pptbax.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv017rgfy"/><path class="aefel7b-l"/><path class="a0ch81bxw"/><path class="w4-pptbax"/>`,
		"fallback": "selfhst:lidbrainz-light",
	});
}

export default Component;
