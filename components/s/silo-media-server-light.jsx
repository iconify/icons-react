import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cym2lacyw.css';
import '../../css/z/z-ykbvj8h.css';
import '../../css/u/u9t9_-bsv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cym2lacyw"/><path class="z-ykbvj8h"/><path class="u9t9_-bsv"/>`,
		"fallback": "selfhst:silo-media-server-light",
	});
}

export default Component;
