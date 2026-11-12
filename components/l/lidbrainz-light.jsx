import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv017rgfy.css';
import '../../css/g/gk9fq7bun.css';
import '../../css/a/a0ch81bxw.css';
import '../../css/n/ntier-hqt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv017rgfy"/><path class="gk9fq7bun"/><path class="a0ch81bxw"/><path class="ntier-hqt"/>`,
		"fallback": "selfhst:lidbrainz-light",
	});
}

export default Component;
